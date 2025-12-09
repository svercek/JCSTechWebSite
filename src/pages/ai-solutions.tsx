import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Workflow, Lock } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-900" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Engineered AI Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fortune 500-Level AI Expertise for Modern Business
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">A Natural Evolution</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At JCS Technologies, we've always maintained our position at the leading edge of technology, 
              delivering the best possible products to our customers. As AI matured from experimental technology 
              to a practical tool for developing advanced applications in faster timeframes, pivoting to AI was 
              not just logical—it was inevitable.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              AI represents a new paradigm in programming. Just as we mastered previous technological shifts—from 
              mainframe to client-server, from monoliths to microservices, from on-premise to cloud—we've now 
              positioned ourselves at the forefront of the AI revolution. This isn't a departure from our core 
              mission; it's the continuation of our commitment to providing state-of-the-art solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Our focus is bringing Fortune 500-level AI engineering expertise to businesses of all sizes, helping 
              them modernize operations without disruption while achieving measurable results: 15-30% reductions in 
              operational costs through intelligent automation, improved decision-making through data insights, and 
              enhanced customer experiences through personalization.
            </p>
          </div>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our AI Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Intelligent Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate repetitive tasks, document processing, data entry, and workflow orchestration using AI. 
                  We identify high-impact automation opportunities that reduce manual effort while improving accuracy 
                  and speed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Natural Language Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build intelligent chatbots, document analysis systems, sentiment analysis tools, and automated 
                  customer support solutions. We leverage large language models to understand and generate human-like 
                  text at scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Compliant AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We apply enterprise security standards to every AI implementation. Data privacy, model security, 
                  bias detection, and regulatory compliance are built into our solutions from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our AI Approach is Different */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Enterprise-Grade AI Engineering</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Reliability First</h3>
                <p className="text-muted-foreground mb-4">
                  Many AI implementations fail because they're built as experiments, not production systems. We apply 
                  the same engineering rigor to AI that we've used for three decades in enterprise software: comprehensive 
                  testing, error handling, monitoring, and graceful degradation. Our AI solutions work consistently in 
                  real-world conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Security & Privacy</h3>
                <p className="text-muted-foreground mb-4">
                  AI systems handle sensitive data and make important decisions. We implement defense-in-depth security, 
                  data encryption, access controls, and audit trails. Our experience with financial services and 
                  telecommunications means we understand regulatory requirements and build compliant solutions from the start.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Business-Focused Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  We don't implement AI for its own sake. Every solution is designed to solve specific business problems 
                  and deliver measurable ROI. We start by understanding your workflows, identifying bottlenecks, and 
                  quantifying potential improvements. Our implementations are pragmatic, focusing on high-impact use cases 
                  that justify the investment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Integration with Existing Systems</h3>
                <p className="text-muted-foreground mb-4">
                  AI doesn't exist in isolation. Our solutions integrate seamlessly with your existing applications, 
                  databases, and workflows. We leverage APIs, message queues, and event-driven architectures to ensure 
                  AI capabilities enhance rather than disrupt your current operations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Continuous Improvement</h3>
                <p className="text-muted-foreground mb-4">
                  AI models need ongoing refinement. We build systems that learn from production data, monitor performance 
                  metrics, and adapt to changing conditions. Our ML Ops practices ensure your AI solutions improve over time 
                  rather than degrade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Real-World Applications</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Customer Service Automation</h3>
                <p className="text-muted-foreground">
                  Intelligent chatbots that handle routine inquiries, route complex issues to appropriate specialists, 
                  and provide 24/7 support. Reduces support costs by 30-40% while improving response times.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Document Processing</h3>
                <p className="text-muted-foreground">
                  Automated extraction of data from invoices, contracts, forms, and reports. Eliminates manual data entry, 
                  reduces errors, and accelerates processing times from days to minutes.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Personalization Engines</h3>
                <p className="text-muted-foreground">
                  Recommendation systems that tailor content, products, and experiences to individual users. Increases 
                  engagement, conversion rates, and customer lifetime value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our AI Implementation Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                  <p className="text-muted-foreground">
                    We analyze your workflows, identify automation opportunities, and quantify potential ROI. This phase 
                    includes stakeholder interviews, process mapping, and feasibility analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proof of Concept</h3>
                  <p className="text-muted-foreground">
                    We build a focused prototype to validate the approach, demonstrate value, and refine requirements. 
                    This de-risks the project and provides early feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Production Implementation</h3>
                  <p className="text-muted-foreground">
                    We develop the full solution with enterprise-grade engineering: scalability, security, monitoring, 
                    and integration with existing systems. Includes comprehensive testing and documentation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Training</h3>
                  <p className="text-muted-foreground">
                    We roll out the solution with minimal disruption, train your team, and provide ongoing support. 
                    Includes monitoring dashboards and performance metrics.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimization & Evolution</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor performance, refine models, and identify new opportunities. AI systems improve 
                    over time with proper maintenance and iteration.
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
            Ready to Explore AI for Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI can reduce costs, improve efficiency, and create competitive advantage for your organization.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
