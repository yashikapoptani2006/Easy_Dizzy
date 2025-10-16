import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen } from "lucide-react";

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
}: CourseCardProps) => {
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

  return (
    <Card className="group hover:shadow-custom-md transition-smooth overflow-hidden border-2 hover:border-primary/50">
      {/* Course Image/Gradient */}
      <div className="h-48 gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-smooth"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-smooth" />
        </div>
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
        <Button className="w-full gradient-primary border-0 group-hover:scale-105 transition-smooth">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
