import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Target, Globe, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Every solution built with enterprise-grade security and compliance at its core"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "Focused on delivering measurable business outcomes and ROI for our clients"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Approach",
      description: "We become an extension of your team, not just another vendor"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Proven capability to handle enterprise deployments across multiple regions"
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      background: "Former VP of Data Strategy at Fortune 100 financial services company"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      background: "Ex-Google Principal Engineer with 15+ years in large-scale data systems"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Data Scientist",
      background: "PhD in Statistics, former Head of Analytics at leading healthcare org"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium">
              About Bravura Data Works
            </Badge>
            
            <h1 className="text-enterprise-xl leading-tight">
              Pioneering the Future of 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Enterprise Analytics</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded to bridge the gap between cutting-edge data science and enterprise reliability, 
              Bravura Data Works has become the trusted partner for Fortune 500 companies 
              seeking transformational analytics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-enterprise-lg mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize advanced analytics for enterprise organizations, making sophisticated 
                  data science accessible, secure, and scalable for businesses that demand the highest 
                  standards of performance and reliability.
                </p>
              </div>
              
              <div>
                <h3 className="text-enterprise-md mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every enterprise decision is powered by intelligent, real-time data 
                  insights, driving unprecedented levels of efficiency, innovation, and competitive advantage.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Enterprise Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-enterprise-lg mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision, every solution, and every client relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-enterprise-lg mb-6">Executive Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans with deep expertise in enterprise data, technology, and business strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-enterprise text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-enterprise-lg mb-6">Enterprise Credentials</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Certified and compliant with the most stringent industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, title: "SOC 2 Type II", description: "Security & Compliance" },
              { icon: <Award />, title: "ISO 27001", description: "Information Security" },
              { icon: <Zap />, title: "GDPR Compliant", description: "Data Protection" },
              { icon: <Globe />, title: "HIPAA Ready", description: "Healthcare Security" }
            ].map((cert, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mx-auto">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold">{cert.title}</div>
                  <div className="text-sm opacity-80">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="btn-accent text-lg px-10 py-4">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;