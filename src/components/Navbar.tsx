import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-custom-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              E-Learn <span className="gradient-primary bg-clip-text text-transparent">Hub</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Courses
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              For Instructors
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button className="gradient-primary border-0">Get Started</Button>
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
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Courses
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
              For Instructors
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button className="w-full gradient-primary border-0">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
