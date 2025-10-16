import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image?: string;
}

const CourseCard = ({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  category,
  level,
  image,
}: CourseCardProps) => {
  const navigate = useNavigate();
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const handleEnroll = () => {
    const isAuthed = localStorage.getItem("easydizzy_auth") === "true";
    if (!isAuthed) {
      toast.info("Please sign in to enroll");
      navigate("/auth");
      return;
    }
    
    // Special handling for specific courses
    if (title === "Complete Web Development Bootcamp") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://youtube.com/playlist?list=PLVht7UBOfJb8p7ehKW_yDfCrzAJVRHrE7&si=hFc3W5uyHD5hTDZr", "_blank");
      return;
    }
    
    if (title === "Data Science & Machine Learning") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://www.youtube.com/live/hhGPiDrUe1c?si=p3m89Y6VEmTfGSVt", "_blank");
      return;
    }
    
    if (title === "Advanced UI/UX Design Masterclass") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://youtube.com/playlist?list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_&si=F1c0CnYUJ7Fr_Q98", "_blank");
      return;
    }
    
    if (title === "Mobile App Development with React Native") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://youtube.com/playlist?list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&si=CzMV1hcjB0ZWiQEM", "_blank");
      return;
    }
    
    if (title === "Digital Marketing Fundamentals") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://youtube.com/playlist?list=PLLSovFY-eK2_1isRMtrNS_me4zDrs2CuS&si=md4B6LQBuvexPQDF", "_blank");
      return;
    }
    
    if (title === "Cloud Computing with AWS") {
      toast.success("Redirecting to course content! 🎉");
      window.open("https://youtube.com/playlist?list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&si=db8jCYqlvL-TYZtU", "_blank");
      return;
    }
    
    toast.success("Enrollment started! 🎉");
  };

  return (
    <Card className="group hover:shadow-custom-md transition-smooth overflow-hidden border-2 hover:border-primary/50">
      {/* Course Image / Fallback */}
      <div className="h-48 relative overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full gradient-card relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-smooth" />
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-smooth" />
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge className={getLevelColor(level)}>{level}</Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2 flex-1">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <CardTitle className="text-xl group-hover:text-primary transition-smooth line-clamp-2">
              {title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{instructor}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleEnroll} className="w-full gradient-primary border-0 group-hover:scale-105 transition-smooth">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
