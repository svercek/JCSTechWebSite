import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2, Save, X, LogOut, Loader2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}

interface PostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
}

const emptyForm: PostFormData = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  author: 'John Svercek',
};

export default function ThoughtsAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [formData, setFormData] = useState<PostFormData>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(''); 

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/verify');
      if (response.ok) {
        setAuthenticated(true);
        fetchPosts();
      } else {
        navigate('/admin/login');
      }
    } catch (err) {
      navigate('/admin/login');
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts');
      const data = await response.json();
      
      // Check if response is an error object
      if (data.error) {
        setError(data.message || 'Failed to load posts');
        setPosts([]);
      } else if (Array.isArray(data)) {
        setPosts(data);
      } else {
        setError('Invalid response format');
        setPosts([]);
      }
    } catch (err) {
      setError('Failed to load posts');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');  // ADD THIS LINE
    setSaving(true);
  
    try {
      const url = editingId ? `/api/blog/posts/${editingId}` : '/api/blog/posts';
      const method = editingId ? 'PUT' : 'POST';
  
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();  // MOVE THIS UP
  
      // Check if response is successful (200-299 status codes)
      if (response.ok) {
        // Success! Refresh the post list
        await fetchPosts();
        setFormData(emptyForm);
        setEditingId(null);
        setIsFormOpen(false);
        setSuccessMessage(editingId ? 'Post updated successfully!' : 'Post created successfully!');  // ADD THIS
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);  // ADD THIS
      } else {
        // API returned an error status
        setError(data.error || data.message || 'Failed to save post');
      }
    } catch (err) {
      console.error('Submit error:', err);  // ADD THIS
      setError('Failed to save post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content,
      author: post.author,
    });
    setEditingId(post.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' });
      if (response.ok) {
        await fetchPosts();
      } else {
        setError('Failed to delete post');
      }
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setIsFormOpen(false);
    setError('');
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Thoughts Management</h1>
            <p className="text-muted-foreground mt-1">Create and manage your thoughts</p>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {/* Success Alert */}
        {successMessage && (
          <Alert className="bg-green-50 border-green-200 text-green-800">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
		
        {/* Create New Post Button */}
        {!isFormOpen && (
          <Button onClick={() => setIsFormOpen(true)} className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create New Post
          </Button>
        )}
		
        {/* Post Form */}
        {isFormOpen && (
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? 'Edit Post' : 'Create New Post'}</CardTitle>
              <CardDescription>
                {editingId ? 'Update the post details' : 'Fill in the details for your new post'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                    placeholder="Enter post title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL) *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                    placeholder="post-url-slug"
                  />
                  <p className="text-xs text-muted-foreground">
                    Auto-generated from title, but you can customize it
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                    placeholder="Author name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief summary of the post (optional)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    placeholder="Write your thoughts here..."
                    rows={12}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supports Markdown formatting
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={saving}>
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        {editingId ? 'Update Post' : 'Create Post'}
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Published Posts ({posts.length})</h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No posts yet. Create your first post to get started!
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        By {post.author} • {new Date(post.publishedDate).toLocaleDateString()}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">
                        Slug: <code className="bg-muted px-1 py-0.5 rounded">{post.slug}</code>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {post.excerpt && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
