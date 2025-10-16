import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password || (!isLogin && !name)) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Mock authentication - store in localStorage
    if (isLogin) {
      const storedUser = localStorage.getItem("easydizzy_user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          toast.success(`Welcome back, ${user.name}! 🎉`);
          localStorage.setItem("easydizzy_auth", "true");
          setTimeout(() => navigate("/dashboard"), 500);
        } else {
          toast.error("Invalid credentials");
        }
      } else {
        toast.error("No account found. Please sign up first.");
      }
    } else {
      // Sign up
      localStorage.setItem("easydizzy_user", JSON.stringify({ name, email, password }));
      localStorage.setItem("easydizzy_auth", "true");
      toast.success(`Account created! Welcome to EasyDizzy, ${name}! 🎓`);
      setTimeout(() => navigate("/dashboard"), 500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-library-with-books-and-students-4964-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-float-slow absolute top-20 left-20 w-2 h-2 rounded-full bg-primary/30"></div>
        <div className="animate-float-medium absolute top-40 right-40 w-3 h-3 rounded-full bg-accent/30"></div>
        <div className="animate-float-fast absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-primary/40"></div>
        <div className="animate-float-slow absolute bottom-20 right-20 w-4 h-4 rounded-full bg-accent/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-custom-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">
                EasyDizzy
              </span>
            </div>
            <p className="text-muted-foreground">Your lovable learning journey starts here</p>
          </div>

          {/* Auth Card */}
          <Card className="shadow-custom-lg border-2 hover:border-primary/50 transition-smooth animate-scale-in backdrop-blur-sm bg-card/95">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </CardTitle>
              <CardDescription className="text-center">
                {isLogin 
                  ? "Sign in to continue your learning journey" 
                  : "Join thousands of learners worldwide"}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="transition-smooth hover:border-primary/50"
                      required
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="transition-smooth hover:border-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="transition-smooth hover:border-primary/50"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  type="submit" 
                  className="w-full gradient-primary border-0 hover:scale-105 transition-smooth"
                  size="lg"
                >
                  {isLogin ? "Sign In" : "Sign Up"}
                </Button>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {isLogin 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Sign in"}
                </button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
