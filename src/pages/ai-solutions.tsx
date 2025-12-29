import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Workflow, Lock } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
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

      {/* Industry Focus Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Industry Expertise</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              We specialize in AI solutions for highly regulated, complex industries where reliability, 
              security, and compliance are paramount.
            </p>
            
            <div className="space-y-12">
              {/* Medical/Healthcare */}
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Medical & Healthcare</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Healthcare AI represents one of the most impactful yet challenging domains for artificial intelligence. 
                    The potential to improve patient outcomes, reduce diagnostic errors, and streamline clinical workflows 
                    is enormous—but so are the barriers.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Why Healthcare AI is Difficult:</strong> This field demands navigation of complex regulatory 
                    frameworks (HIPAA, FDA approval for diagnostic tools), stringent data privacy requirements, liability 
                    concerns, and the need for clinical validation. Medical AI systems must achieve exceptional accuracy 
                    because errors can have life-or-death consequences. Integration with legacy healthcare IT systems 
                    (EHR, PACS, HL7) adds additional technical complexity.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="text-amber-600">⚠</span> Healthcare: A Proof of Concept Journey
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      <strong>We have decided not to pursue the healthcare segment commercially</strong> due to the significant 
                      regulatory, liability, and validation challenges outlined above. However, our proof-of-concept project, 
                      <strong>GuardianMD</strong>, demonstrates the remarkable viability of AI as a medical assistant.
                    </p>
                    <div className="bg-white p-4 rounded border border-amber-200 mb-3">
                      <h5 className="font-semibold mb-2">GuardianMD: Proof of Concept</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        GuardianMD is an AI-powered physician assistant that showcases what's possible in healthcare AI:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span><strong>Intelligent Decision Support:</strong> Analyzes patient symptoms, medical history, and medications to suggest differential diagnoses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span><strong>Clinical Accuracy:</strong> Demonstrates AI's capability to augment physician expertise and clinical judgment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span><strong>Real-World Validation:</strong> Proves the technical feasibility of AI-assisted medical decision-making</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      <strong>Important Note:</strong> GuardianMD has not undergone code hardening or the rigorous testing, 
                      clinical trials, and regulatory approval required for deployment in medical environments. It remains a 
                      powerful demonstration of AI's potential in healthcare, not a production-ready medical device.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Legal Services</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The legal industry is experiencing a fundamental transformation through AI. Document review, contract 
                    analysis, legal research, and case prediction are being revolutionized by natural language processing 
                    and machine learning.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Why Legal AI Matters:</strong> Legal professionals spend countless hours on document review, 
                    research, and analysis—tasks that AI can accelerate dramatically. Our legal AI solutions can analyze 
                    thousands of documents in minutes, identify relevant precedents, extract key clauses from contracts, 
                    and flag potential risks or inconsistencies. This doesn't replace attorneys; it amplifies their 
                    capabilities, allowing them to focus on strategy and client relationships rather than tedious review work.
                  </p>
                  <p className="text-muted-foreground">
                    We've developed specialized AI tools for contract analysis, legal research automation, due diligence, 
                    and compliance monitoring. Our systems understand legal terminology, jurisdiction-specific nuances, 
                    and the hierarchical structure of legal documents.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                    <p className="text-muted-foreground mb-3">
                      <strong>Learn More:</strong> For detailed information about our legal AI capabilities, case studies, 
                      and specific solutions for law firms and corporate legal departments, visit:
                    </p>
                    <a 
                      href="https://legal-ai-pro.com/home" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline"
                    >
                      legal-ai-pro.com →
                    </a>
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-4">Insurance</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Ready to Transform Insurance Operations</strong> — While we haven't yet ventured into the insurance sector, 
                    we recognize the tremendous potential for AI to revolutionize this industry.
                  </p>
                  <p className="text-muted-foreground">
                    Insurance operations involve massive volumes of data, complex risk assessments, and repetitive 
                    processing tasks—making it an ideal domain for AI transformation.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Potential AI Applications:</strong> AI can automate claims processing, detect 
                    fraudulent claims with high accuracy, perform intelligent underwriting risk assessment, and provide 
                    personalized policy recommendations. Systems can analyze historical claims data to predict 
                    risk patterns, process documents (medical records, police reports, repair estimates) automatically, 
                    and streamline customer interactions through intelligent chatbots.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">
                      💡 We're ready to jump into insurance AI when the right opportunity arises. Potential benefits: 
                      faster claims resolution (days to hours), reduced operational costs (20-30% typical savings), 
                      improved fraud detection rates, and better customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Financial Services */}
              <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Positioned for Financial AI Innovation</strong> — The financial sector offers compelling opportunities 
                    for AI transformation, and we're prepared to engage when the right project emerges.
                  </p>
                  <p className="text-muted-foreground">
                    Financial institutions handle enormous transaction volumes, face sophisticated fraud threats, and 
                    operate under strict regulatory requirements—all areas where AI delivers significant value.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Potential AI Applications:</strong> AI can power fraud detection systems that identify suspicious patterns 
                    in real-time, credit risk models that improve lending decisions, algorithmic trading systems, 
                    anti-money laundering (AML) solutions, and personalized financial advisory tools. These systems can analyze 
                    transaction patterns, customer behavior, market data, and regulatory requirements simultaneously.
                  </p>
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-semibold text-green-900">
                      💡 We're ready to develop financial AI solutions when the opportunity arises. Key strength: 
                      Building explainable AI models (for regulatory compliance) that are highly accurate (minimizing costly false positives) 
                      and secure (protecting sensitive financial data), while delivering measurable ROI through reduced fraud losses, 
                      improved credit decisions, and operational efficiency gains.
                    </p>
                  </div>
                </div>
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
