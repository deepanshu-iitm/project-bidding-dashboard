"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Github, Linkedin, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { profile, completedProjects } from "@/app/data/profile";
import { toast } from "sonner";

export function FreelancerProfile() {
  const [rating, setRating] = useState(profile.rating);
  const [totalRatings, setTotalRatings] = useState(profile.totalRatings);
  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem("freelancerRating");
    if (savedRating) {
      setRating(parseFloat(savedRating));
    }
    const savedTotalRatings = localStorage.getItem("totalRatings");
    if (savedTotalRatings) {
      setTotalRatings(parseInt(savedTotalRatings));
    }
  }, []);

  const handleRating = (value: number) => {
    const newRating = ((rating * totalRatings) + value) / (totalRatings + 1);
    setRating(newRating);
    setTotalRatings(prev => prev + 1);
    localStorage.setItem("freelancerRating", newRating.toString());
    localStorage.setItem("totalRatings", (totalRatings + 1).toString());
    toast.success("Rating submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{profile.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">{profile.description}</p>
              
              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Portfolio Links</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href={profile.portfolioLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={profile.portfolioLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={profile.portfolioLinks.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Rating</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 cursor-pointer ${
                          star <= hoveredStar
                            ? "fill-yellow-400 text-yellow-400"
                            : star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => handleRating(star)}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({rating.toFixed(1)} from {totalRatings} ratings)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Completed Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedProjects.map((project, index) => (
                <div key={project.id}>
                  {index > 0 && <Separator className="my-4" />}
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Completed: {new Date(project.completionDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}