import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "Our enterprise team will contact you within 24 hours to discuss your project.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      title: "",
      phone: "",
      industry: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-bravura-xl leading-tight">
              Start Your Data Transformation
              <span className="bg-gradient-lotus bg-clip-text text-transparent"> Journey Today</span>
            </h1>

            <p className="text-xl text-primary leading-relaxed">
              Connect with our enterprise solutions team to discuss your data analytics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise Inquiry Form</CardTitle>
                  <CardDescription className="text-base">
                    Tell us about your project and we'll connect you with the right specialists
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => handleInputChange("industry", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange("projectType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="data-engineering">Data Engineering</SelectItem>
                            <SelectItem value="analytics">Predictive Analytics</SelectItem>
                            <SelectItem value="ai-ml">AI/ML Implementation</SelectItem>
                            <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                            <SelectItem value="governance">Data Governance</SelectItem>
                            <SelectItem value="consultation">Strategic Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2k-5k">$2k - $5k</SelectItem>
                            <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                            <SelectItem value="10k-30k">$10k - $30k</SelectItem>
                            <SelectItem value="30k-50k">$30k - $50k</SelectItem>
                            <SelectItem value="50k+">$50k+</SelectItem>
                            <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange("timeline", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">3-6 months</SelectItem>
                            <SelectItem value="12-months">6-12 months</SelectItem>
                            <SelectItem value="planning">Still planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your data challenges, objectives, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-gold w-full text-lg py-4">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-lotus relative z-10">
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                  <CardDescription>Multiple ways to connect with our enterprise team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-lotus rounded-2xl flex items-center justify-center relative z-10">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-lotus rounded-2xl flex items-center justify-center relative z-10">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">Enterprise Sales</div>
                      <div className="text-sm text-muted-foreground">enterprise@bravura.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-lotus rounded-2xl flex items-center justify-center relative z-10">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">Headquarters</div>
                      <div className="text-sm text-muted-foreground">Milwaukee, WI</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-lotus rounded-2xl flex items-center justify-center relative z-10">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-sm text-muted-foreground">24 hours or less</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-lotus relative z-10">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise Support</CardTitle>
                  <CardDescription>Dedicated support for our enterprise clients</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">24/7 Priority Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">SLA Guarantees</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
