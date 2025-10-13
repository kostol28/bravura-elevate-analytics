import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Database,
  BarChart3,
  Brain,
  Shield,
  Cloud,
  Cog,
  Building,
  Heart,
  ShoppingBag,
  Banknote,
  Factory,
  Plane,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description:
        "Scalable data pipelines, ETL/ELT processes, and cloud-native architectures for enterprise data workflows",
      features: [
        "Real-time data streaming",
        "Multi-cloud integration",
        "Data lake architecture",
        "Performance optimization",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description:
        "Advanced statistical modeling and machine learning solutions that forecast trends and drive strategic decisions",
      features: ["Demand forecasting", "Risk assessment", "Customer analytics", "Market intelligence"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Prototyping",
      description: "Rapid development and deployment of AI solutions tailored to your specific business challenges",
      features: ["Natural language processing", "Computer vision", "Recommendation engines", "Process automation"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance",
      description:
        "Comprehensive data management frameworks ensuring security, compliance, and quality across your organization",
      features: ["Privacy compliance", "Data lineage", "Quality monitoring", "Access controls"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless transition of legacy systems to modern cloud platforms with minimal disruption",
      features: ["Platform assessment", "Migration strategy", "Performance tuning", "Cost optimization"],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Integration Services",
      description:
        "Connect disparate systems and create unified data ecosystems that power intelligent decision-making",
      features: ["API development", "System integration", "Real-time sync", "Legacy modernization"],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current data landscape, challenges, and business objectives",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Development of detailed roadmap with timelines, resources, and success metrics",
    },
    {
      step: "03",
      title: "Proof of Concept",
      description: "Rapid prototyping to validate approach and demonstrate value before full implementation",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Agile development and deployment with continuous stakeholder feedback and iteration",
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Rigorous quality assurance, performance testing, and security validation",
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "Go-live support, user training, and ongoing optimization for sustained success",
    },
  ];

  const industries = [
    { icon: <Building />, name: "Financial Services", description: "Risk analytics & fraud detection" },
    { icon: <Heart />, name: "Healthcare", description: "Clinical insights & population health" },
    { icon: <ShoppingBag />, name: "Retail & E-commerce", description: "Customer analytics & personalization" },
    { icon: <Banknote />, name: "Insurance", description: "Actuarial modeling & claims analytics" },
    { icon: <Factory />, name: "Manufacturing", description: "Predictive maintenance & quality control" },
    { icon: <Plane />, name: "Transportation", description: "Route optimization & fleet analytics" },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-bravura-xl leading-tight">
              Comprehensive Data Solutions for
              <span className="bg-gradient-lotus bg-clip-text text-transparent"> Enterprise Growth</span>
            </h1>

            <p className="text-xl text-primary leading-relaxed">
              From strategic consulting to full-scale implementation, we deliver end-to-end analytics solutions that
              transform how businesses leverage their data assets for growth.
            </p>

            <Button size="lg" className="btn-gold text-lg px-10 py-4">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bravura-lg mb-6">Core Service Offerings</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Specialized expertise across the full spectrum of enterprise data and analytics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-lotus relative z-10">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-lotus rounded-2xl flex items-center justify-center text-primary-foreground mb-4 relative z-10">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bravura-lg mb-6">Our Proven Methodology</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              A structured approach that ensures successful delivery and sustainable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="card-lotus relative z-10">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-lotus rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg relative z-10">
                      {phase.step}
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bravura-lg mb-6">Industry Expertise</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Deep domain knowledge across key enterprise sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-lotus text-center relative z-10">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-lotus rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-4 relative z-10">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
