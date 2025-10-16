import { Button } from "@/components/ui/button";
import { BookOpen, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                🎓 Transform Your Learning Journey
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Learn, Explore,
              <span className="gradient-primary bg-clip-text text-transparent"> Grow!</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Access world-class courses, track your progress, and achieve your learning goals with our modern e-learning platform designed for students and instructors.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary border-0">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                Browse Courses
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <Trophy className="w-5 h-5" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:h-[600px] transition-smooth">
            <div className="absolute inset-0 gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Students learning together in a modern educational environment"
              className="relative rounded-3xl shadow-custom-lg w-full h-full object-cover transition-smooth hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
