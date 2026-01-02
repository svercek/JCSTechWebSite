import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Target, Lightbulb, Shield, TrendingUp, Users, Lock } from 'lucide-react';

export default function TraditionalDevelopment() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-900">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Traditional Program Development
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Three decades of proven expertise in delivering enterprise-scale software solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">Proven Track Record</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 30 years, JCS Technologies has been at the forefront of enterprise software development. 
                Our traditional program development services have helped organizations across industries modernize 
                their operations, improve efficiency, and achieve measurable business outcomes.
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Market Opportunity Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We excel at identifying untapped market opportunities and translating them into 
                    successful software solutions that drive business growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Technological Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our team stays ahead of technology trends, ensuring your solutions leverage the 
                    most effective and appropriate technologies for your needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Enterprise-Scale Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We specialize in building robust, scalable solutions that can handle the demands 
                    of large organizations and complex business processes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Measurable ROI Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every project is designed with clear business objectives and measurable outcomes, 
                    ensuring your investment delivers tangible value.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Customer Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We work closely with your team throughout the development process, ensuring the 
                    final solution aligns perfectly with your vision and requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built-in security best practices and compliance considerations ensure your 
                    solutions meet industry standards and regulatory requirements.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Core Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Core Services</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Custom Software Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tailored solutions designed specifically for your business needs, from concept to deployment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legacy System Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transform outdated systems into modern, efficient platforms without disrupting your operations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Seamlessly connect disparate systems and data sources to create unified, efficient workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Strategic guidance on technology decisions, architecture design, and implementation planning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Industry Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Industry Experience</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our three decades of experience span multiple industries, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Financial Services</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Healthcare</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Manufacturing</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Retail & E-commerce</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Government</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold">Technology</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's explore how our proven development expertise can help modernize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
