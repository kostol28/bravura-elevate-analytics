import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, FileCheck, Lock, BarChart3, Zap, Users, Globe, TrendingUp, Database } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const capabilities = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Scalable data pipelines and infrastructure for enterprise-grade analytics"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models that drive strategic business decisions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Lightning-fast data processing with 99.9% uptime guarantees"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "SOC 2, ISO 27001, GDPR, and HIPAA compliant data handling"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Actionable insights that transform data into competitive advantage"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamless multi-cloud deployment and migration strategies"
    }
  ];

  const metrics = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support Coverage" },
    { value: "10+", label: "Years Experience" }
  ];

  const certifications = [
    { icon: <Shield />, name: "SOC 2" },
    { icon: <Award />, name: "ISO 27001" },
    { icon: <FileCheck />, name: "GDPR" },
    { icon: <Lock />, name: "HIPAA" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium">
              Data-Driven Solutions for Growing Businesses
            </Badge>
            
            <h1 className="text-bravura-xl leading-tight">
              Transform Your Data Into 
              <span className="bg-gradient-lotus bg-clip-text text-transparent"> Competitive Advantage</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Partner with Bravura Data Works for professional analytics solutions. 
              We help businesses unlock the power of their data with reliable security and expert insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-gold text-lg px-10 py-4">
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary hover:bg-primary hover:text-primary-foreground">
                View Case Studies
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                  <div className="w-5 h-5">{cert.icon}</div>
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bravura-lg mb-6">Enterprise-Grade Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data analytics solutions designed for the most demanding enterprise environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-lotus relative z-10">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-lotus rounded-2xl flex items-center justify-center text-primary-foreground mb-4 relative z-10">
                    {capability.icon}
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-bravura-lg mb-16">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="text-5xl font-bold text-primary">{metric.value}</div>
                <div className="text-lg text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Client Logos Placeholder */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-muted-foreground">Powering Data-Driven Success</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Client Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-bravura-lg">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join growing businesses who trust Bravura Data Works 
              to deliver professional analytics solutions with reliable security and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold text-lg px-10 py-4">
                Schedule Discovery Call
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
