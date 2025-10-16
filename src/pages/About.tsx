import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Target, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About EasyDizzy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Join millions of learners transforming their lives through knowledge.
          </p>
          <Button 
            onClick={() => navigate("/auth")} 
            className="gradient-primary border-0 hover:scale-105 transition-smooth"
            size="lg"
          >
            Start Learning Today
          </Button>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="hover:shadow-custom-md transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize education by providing world-class learning experiences that are 
                accessible, affordable, and engaging. We believe everyone deserves the opportunity 
                to learn, grow, and achieve their dreams regardless of their background or location.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-custom-md transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A world where quality education knows no boundaries. We envision a future where 
                every person has access to the knowledge and skills they need to thrive in an 
                ever-changing world, creating opportunities for personal and professional growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1M+</h3>
            <p className="text-muted-foreground">Active Learners</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Expert Courses</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">50K+</h3>
            <p className="text-muted-foreground">Certificates Earned</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-custom-md transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We constantly evolve our platform with cutting-edge technology to deliver 
                  the best learning experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-custom-md transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learning is better together. We foster a supportive community where 
                  everyone can grow and succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-custom-md transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards in course quality, instructor expertise, 
                  and student support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of learners and unlock your potential with courses designed 
            by industry experts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => navigate("/auth")} 
              className="gradient-primary border-0 hover:scale-105 transition-smooth"
              size="lg"
            >
              Get Started Free
            </Button>
            <Button 
              onClick={() => {
                const coursesSection = document.querySelector('#courses-section');
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate("/");
                  setTimeout(() => {
                    const section = document.querySelector('#courses-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }} 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-smooth"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
