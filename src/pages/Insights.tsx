import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, TrendingUp, Brain, Shield } from "lucide-react";

const Insights = () => {
  const categories = ["All", "Data Strategy", "AI & Analytics", "Case Studies", "Industry Trends"];
  
  const featuredPost = {
    title: "The Enterprise Data Governance Revolution: A 2024 Perspective",
    excerpt: "How modern businesses are transforming their data governance strategies to unlock competitive advantage while maintaining compliance and security in an increasingly regulated landscape.",
    author: "Dr. Emily Watson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Data Strategy",
    featured: true
  };

  const posts = [
    {
      title: "Implementing Real-Time Analytics at Scale: Lessons from Healthcare",
      excerpt: "A deep dive into how a major healthcare provider achieved 99.9% uptime for critical patient data systems while processing over 10TB daily.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Case Studies"
    },
    {
      title: "AI Model Deployment in Financial Services: Regulatory Considerations",
      excerpt: "Navigate the complex regulatory landscape when deploying machine learning models in banking and insurance environments.",
      author: "Sarah Chen",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "AI & Analytics"
    },
    {
      title: "Cloud Migration ROI: Quantifying the Business Impact",
      excerpt: "How to measure and maximize the return on investment from enterprise cloud data platform migrations.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Industry Trends"
    },
    {
      title: "Building Trust in AI: Enterprise Ethics and Transparency",
      excerpt: "Establishing ethical AI frameworks that build stakeholder confidence while driving business outcomes.",
      author: "Dr. Emily Watson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "AI & Analytics"
    },
    {
      title: "Data Mesh Architecture: Scaling Analytics Across Large Organizations",
      excerpt: "Implementing decentralized data architecture patterns that enable domain-driven analytics at enterprise scale.",
      author: "Alex Thompson",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Data Strategy"
    },
    {
      title: "Manufacturing Intelligence: Predictive Maintenance Success Story",
      excerpt: "How a global manufacturer reduced equipment downtime by 40% using advanced predictive analytics and IoT integration.",
      author: "Lisa Park",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "Case Studies"
    }
  ];

  const stats = [
    { value: "50+", label: "Published Articles" },
    { value: "25K+", label: "Monthly Readers" },
    { value: "15+", label: "Industry Experts" },
    { value: "4.8/5", label: "Reader Rating" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium">
              Insights & Thought Leadership
            </Badge>
            
            <h1 className="text-bravura-xl leading-tight">
              Expert Insights on 
              <span className="bg-gradient-lotus bg-clip-text text-transparent"> Enterprise Analytics</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay ahead of the curve with cutting-edge perspectives, case studies, and strategic guidance 
              from our team of data science and analytics experts.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest insights on enterprise data strategy</p>
          </div>
          
          <Card className="card-lotus relative z-10">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gold text-accent-foreground">Featured</Badge>
                <Badge variant="outline">{featuredPost.category}</Badge>
              </div>
              <CardTitle className="text-2xl lg:text-3xl leading-tight">
                {featuredPost.title}
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                {featuredPost.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="btn-gold">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Expert perspectives on data, analytics, and AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="card-lotus group cursor-pointer relative z-10">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    {post.category === "Case Studies" && <TrendingUp className="w-3 h-3 text-primary" />}
                    {post.category === "AI & Analytics" && <Brain className="w-3 h-3 text-primary" />}
                    {post.category === "Data Strategy" && <Shield className="w-3 h-3 text-primary" />}
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{post.readTime}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-bravura-lg">Stay Informed</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Subscribe to our monthly newsletter for the latest insights, case studies, 
              and strategic perspectives on enterprise data and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 rounded-lg text-primary bg-primary-foreground"
              />
              <Button size="lg" className="btn-gold text-lg px-8 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70">
              Join 10,000+ enterprise leaders who trust our insights
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;