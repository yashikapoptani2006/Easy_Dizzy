import { Target, TrendingUp, Award, Video, MessageSquare, Clock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "Customized course recommendations based on your goals and skill level.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed analytics and completion rates.",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description: "Get recognized for your achievements with professional certificates.",
  },
  {
    icon: Video,
    title: "Interactive Content",
    description: "Engage with video lectures, quizzes, and hands-on projects.",
  },
  {
    icon: MessageSquare,
    title: "Community Support",
    description: "Connect with instructors and peers through discussion forums.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access courses anytime, anywhere with lifetime access to materials.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-primary bg-clip-text text-transparent">E-Learn Hub?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed in your learning journey, all in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 shadow-custom-sm hover:shadow-custom-md transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
