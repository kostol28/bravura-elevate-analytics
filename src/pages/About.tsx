import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Target, Globe, Zap } from "lucide-react";


const useScrollReveal = () => {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(30);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        // Calculate progress (0 to 1) based on element position
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight * 0.5)));
        
        setOpacity(progress);
        setTranslateY(30 * (1 - progress));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, opacity, translateY };
};

const About = () => {
  const missionReveal = useScrollReveal();
  const visionReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();

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
      role: "Founder & CEO",
      background: "Former Data Strategist with 8+ years in financial services, passionate about democratizing analytics"
    },
    {
      name: "Michael Rodriguez",
      role: "Co-Founder & CTO",
      background: "Software engineer with 10+ years building scalable data platforms at tech startups"
    },
    {
      name: "Dr. Emily Watson",
      role: "Lead Data Scientist",
      background: "PhD in Statistics with 6+ years applying machine learning to real-world business problems"
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
            
            <h1 className="text-bravura-xl leading-tight">
              Data Expertise, Delivered with Clarity
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We founded Bravura Data Works to make advanced analytics approachable. Our mission: help businesses of every size unlock the full value of their data through secure, results-driven solutions that actually make sense.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-4xl mx-auto">
            <div>
              <h2 className="text-bravura-lg mb-6">Our Mission</h2>
              <div 
                ref={missionReveal.ref}
                style={{ 
                  opacity: missionReveal.opacity,
                  transform: `translateY(${missionReveal.translateY}px)`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make advanced analytics accessible for growing businesses, providing clear insights 
                  and practical solutions that drive real business value without the complexity 
                  typically associated with enterprise data science.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-bravura-lg mb-6">Our Vision</h2>
              <div 
                ref={visionReveal.ref}
                style={{ 
                  opacity: visionReveal.opacity,
                  transform: `translateY(${visionReveal.translateY}px)`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where every business, regardless of size, can make confident data-driven 
                  decisions that fuel growth and create lasting competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-bravura-lg mb-6">Our Core Values</h2>
              <div 
                ref={valuesReveal.ref}
                style={{ 
                  opacity: valuesReveal.opacity,
                  transform: `translateY(${valuesReveal.translateY}px)`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The principles that guide every decision, every solution, and every client relationship
                </p>
              </div>
            </div>
          
            <div 
              style={{ 
                opacity: valuesReveal.opacity,
                transform: `translateY(${valuesReveal.translateY}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {values.map((value, index) => (
                <Card key={index} className="card-lotus relative z-10">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-lotus rounded-2xl flex items-center justify-center text-primary-foreground mb-4 relative z-10">
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
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bravura-lg mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to helping businesses succeed with data-driven insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-lotus text-center relative z-10">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-lotus rounded-full mx-auto mb-4 flex items-center justify-center relative z-10">
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

      {/* Our Commitment */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-enterprise-lg mb-6">Our Commitment</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professional standards and security practices you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, title: "Data Security", description: "Best Practice Protection" },
              { icon: <Award />, title: "Quality Delivery", description: "Proven Track Record" },
              { icon: <Zap />, title: "Rapid Response", description: "Quick Support" },
              { icon: <Globe />, title: "Scalable Solutions", description: "Growth-Ready Systems" }
            ].map((commitment, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mx-auto">
                  {commitment.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold">{commitment.title}</div>
                  <div className="text-sm opacity-80">{commitment.description}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="btn-gold text-lg px-10 py-4">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;