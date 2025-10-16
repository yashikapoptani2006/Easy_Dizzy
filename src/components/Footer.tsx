import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleSocialClick = (platform: string) => {
    toast.info(`${platform} page coming soon! 🚀`);
  };
  
  const handleCoursesClick = () => {
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
  };
  
  const handleComingSoon = (feature: string) => {
    toast.info(`${feature} coming soon! 🚀`);
  };
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                EasyDizzy
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering learners worldwide with accessible, high-quality education for everyone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleComingSoon('About Us')} className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={handleCoursesClick} className="text-muted-foreground hover:text-primary transition-smooth">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Instructors')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Instructors
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Blog')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleComingSoon('Help Center')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Contact Us')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('FAQs')} className="text-muted-foreground hover:text-primary transition-smooth">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Terms of Service')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* For Instructors */}
          <div>
            <h3 className="font-bold mb-4">For Instructors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleComingSoon('Become an Instructor')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Become an Instructor
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Teaching Resources')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Teaching Resources
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Instructor Dashboard')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Instructor Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => handleComingSoon('Success Stories')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EasyDizzy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
