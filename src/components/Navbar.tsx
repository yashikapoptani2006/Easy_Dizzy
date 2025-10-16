import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem("easydizzy_auth") === "true";
      setIsAuthenticated(isAuth);
      
      if (isAuth) {
        const user = JSON.parse(localStorage.getItem("easydizzy_user") || '{}');
        setUserName(user.name || "User");
      } else {
        setUserName("");
      }
    };
    
    checkAuth();
    // Listen for storage changes to update auth state
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("easydizzy_auth");
    localStorage.removeItem("easydizzy_user");
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleCoursesClick = () => {
    const coursesSection = document.querySelector('#courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
      toast.success("Browse our amazing courses!");
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector('#courses-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    toast.info("Contact page coming soon! 📧");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-custom-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 hover:scale-105 transition-smooth"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              EasyDizzy
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleCoursesClick} className="text-foreground hover:text-primary transition-smooth font-medium">
              Courses
            </button>
            <button onClick={handleAboutClick} className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </button>
            <button onClick={handleContactClick} className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                  <User className="w-4 h-4 mr-2" />
                  {userName}
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate("/auth")}>Sign In</Button>
                <Button className="gradient-primary border-0 hover:scale-105 transition-smooth" onClick={() => navigate("/auth")}>Get Started</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4 animate-fade-in">
            <button onClick={handleCoursesClick} className="block py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left">
              Courses
            </button>
            <button onClick={handleAboutClick} className="block py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left">
              About
            </button>
            <button onClick={handleContactClick} className="block py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left">
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" className="w-full" onClick={() => navigate("/dashboard")}>
                    <User className="w-4 h-4 mr-2" />
                    {userName}
                  </Button>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-full" onClick={() => navigate("/auth")}>
                    Sign In
                  </Button>
                  <Button className="w-full gradient-primary border-0" onClick={() => navigate("/auth")}>Get Started</Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
