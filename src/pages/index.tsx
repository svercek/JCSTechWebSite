import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code2, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Gradient Option 1: Teal to Blue nope */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-blue-900" />  */}
        
        {/* Gradient Option 2: Teal to Dark Teal nope */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-700 to-teal-900" /> */}
        
        {/* Gradient Option 3: Teal to Purple LIKE (Modern Tech) */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-900" />  
        
        {/* Gradient Option 4: Light Teal to Deep Blue LIKE */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-600 to-blue-800" /> */}
        
        {/* Gradient Option 5: Left to Right Teal Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-900" /> */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            JCS Technologies, Inc.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Enterprise-Grade Software Engineering Expertise for Modern Business
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Over 30 years of delivering cutting-edge solutions at IBM, Verizon, and CUNA Mutual Group. 
            Now bringing Fortune 500-level AI and software engineering to businesses of all sizes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/ai-solutions">
                Explore AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button> */}
            <Button asChild size="lg" variant="secondary">
              <Link to="/ai-solutions">
                Explore AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading-Edge Technology, Customer-First Approach</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At JCS Technologies, we've always stayed at the forefront of technological advancement to deliver 
              state-of-the-art solutions. Our business is founded on identifying customer needs, gaining detailed 
              understanding of business requirements, and researching the best tools to fit.
            </p>
            <p className="text-lg text-muted-foreground">
              We don't needlessly build custom applications when off-the-shelf versions are available. We do our 
              research and provide customers with the best solution—whether that's a proven package, custom software 
              built with the latest technology, or often, a strategic merger of both.
            </p>
          </div>
        </div>
      </section>

      {/* Three Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Traditional Development */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Traditional Program Development</CardTitle>
                <CardDescription className="text-base">
                  Three decades of proven enterprise software engineering
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Our foundation is built on delivering scalable, secure applications for major enterprises. 
                  We've identified market opportunities, led technological innovation, and consistently delivered 
                  measurable ROI across diverse industries.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/traditional-development">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Solutions */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Engineered AI Solutions</CardTitle>
                <CardDescription className="text-base">
                  The natural evolution of our commitment to cutting-edge technology
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  AI represents a new paradigm in programming. As we've always maintained our position at the 
                  leading edge, pivoting to AI is a logical shift. We bring Fortune 500-level AI expertise to 
                  businesses, reducing operational costs by 15-30% through reliable, secure automation.
                </p>
                <Button asChild className="w-full">
                  <Link to="/ai-solutions">
                    Discover AI Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Insights & Articles</CardTitle>
                <CardDescription className="text-base">
                  Thought leadership and industry perspectives
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Stay informed with our latest articles on software engineering, AI implementation strategies, 
                  and technology trends. Join the conversation and learn how modern solutions can transform 
                  your business.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/blog">
                    Read Our Blog <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why JCS Technologies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customer-First Philosophy</h3>
                  <p className="text-muted-foreground">
                    Technology supports your business, not the other way around. We identify your needs first, 
                    then find or build the perfect solution.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise Standards</h3>
                  <p className="text-muted-foreground">
                    We apply rigorous security, scalability, and reliability standards honed at Fortune 500 
                    companies to every project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Over 30 years of identifying market opportunities, delivering ROI, and maintaining 
                    technological leadership across major enterprises.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modernization Without Disruption</h3>
                  <p className="text-muted-foreground">
                    We help businesses update legacy systems and adopt AI solutions while maintaining 
                    operational continuity and maximizing existing investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-900" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how JCS Technologies can bring enterprise-grade solutions to your organization.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
