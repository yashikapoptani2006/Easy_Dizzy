import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and build real-world projects from scratch.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 15420,
    rating: 4.8,
    category: "Web Development",
    level: "Beginner" as const,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Data Science & Machine Learning",
    description: "Learn Python, statistics, data visualization, and machine learning algorithms with practical projects.",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    students: 8735,
    rating: 4.9,
    category: "Data Science",
    level: "Intermediate" as const,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Advanced UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with Figma, design thinking, and user research.",
    instructor: "Emma Williams",
    duration: "8 weeks",
    students: 12890,
    rating: 4.7,
    category: "Design",
    level: "Intermediate" as const,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications for iOS and Android using React Native and Expo.",
    instructor: "James Rodriguez",
    duration: "10 weeks",
    students: 9560,
    rating: 4.6,
    category: "Mobile Development",
    level: "Advanced" as const,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing Fundamentals",
    description: "Master SEO, social media marketing, content strategy, and analytics to grow your online presence.",
    instructor: "Lisa Anderson",
    duration: "6 weeks",
    students: 18230,
    rating: 4.8,
    category: "Marketing",
    level: "Beginner" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cloud Computing with AWS",
    description: "Learn to deploy and manage scalable applications using Amazon Web Services cloud platform.",
    instructor: "David Kim",
    duration: "14 weeks",
    students: 6845,
    rating: 4.9,
    category: "Cloud Computing",
    level: "Advanced" as const,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();
  
  const handleViewAllCourses = () => {
    const isAuthenticated = localStorage.getItem("easydizzy_auth") === "true";
    if (isAuthenticated) {
      navigate("/dashboard");
      toast.success("Check out your enrolled courses in the dashboard!");
    } else {
      navigate("/auth");
      toast.info("Sign in to access all courses and track your progress!");
    }
  };
  
  return (
    <section id="courses-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Explore Our Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our wide range of courses taught by industry experts and start learning today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllCourses}
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-smooth"
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
