"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bid, Project } from "@/app/types";
import { toast } from "sonner";

export function ProjectsDashboard() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [bidAmount, setBidAmount] = useState("");
  const [bidTimeline, setBidTimeline] = useState("");
  const [proposal, setProposal] = useState("");

  useEffect(() => {
    const savedBids = localStorage.getItem("bids");
    if (savedBids) {
      setBids(JSON.parse(savedBids));
    }
  }, []);

  const handleBidSubmit = (project: Project) => {
    const newBid: Bid = {
      id: Date.now(),
      projectId: project.id,
      amount: parseFloat(bidAmount),
      timeline: parseInt(bidTimeline),
      proposal,
      status: "pending"
    };

    const updatedBids = [...bids, newBid];
    setBids(updatedBids);
    localStorage.setItem("bids", JSON.stringify(updatedBids));
    
    toast.success("Bid submitted successfully!");
    
    setBidAmount("");
    setBidTimeline("");
    setProposal("");
  };

  const getBidStatus = (projectId: number) => {
    const projectBid = bids.find(bid => bid.projectId === projectId);
    return projectBid?.status || null;
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
            <CardTitle>Available Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project) => {
                const bidStatus = getBidStatus(project.id);
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {project.description}
                            </p>
                          </div>
                          {bidStatus ? (
                            <Badge
                              variant={
                                bidStatus === "accepted"
                                  ? "default"
                                  : bidStatus === "rejected"
                                  ? "destructive"
                                  : "secondary"
                              }
                            >
                              {bidStatus.charAt(0).toUpperCase() + bidStatus.slice(1)}
                            </Badge>
                          ) : (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-400 font-medium px-4 py-2 rounded-md shadow-sm transition-all"                                >
                                  Place Bid
                                </Button>
                              </DialogTrigger>  
                                <DialogContent className="z-50 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl shadow-2xl max-w-lg w-full"> 
                                <DialogHeader>
                                  <DialogTitle>Place a Bid</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 mt-4">
                                  <div>
                                    <label className="text-sm font-medium">
                                      Bid Amount (₹)
                                    </label>
                                    <Input
                                      type="number"
                                      value={bidAmount}
                                      onChange={(e) => setBidAmount(e.target.value)}
                                      placeholder="Enter your bid amount"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">
                                      Timeline (days)
                                    </label>
                                    <Input
                                      type="number"
                                      value={bidTimeline}
                                      onChange={(e) => setBidTimeline(e.target.value)}
                                      placeholder="Enter proposed timeline"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">
                                      Proposal
                                    </label>
                                    <Textarea
                                      value={proposal}
                                      onChange={(e) => setProposal(e.target.value)}
                                      placeholder="Write your proposal"
                                      className="h-32"
                                    />
                                  </div>
                                  <Button
                                    className="w-full"
                                    onClick={() => handleBidSubmit(project)}
                                    disabled={!bidAmount || !bidTimeline || !proposal}
                                  >
                                    Submit Bid
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Budget: ₹{project.budget.toLocaleString()}</span>
                          <span>Timeline: {project.timeline} days</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}