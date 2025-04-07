import { FreelancerProfile } from "@/components/freelancer/profile";
import { ProjectsDashboard } from "@/components/projects/dashboard";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <ModeToggle />
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <FreelancerProfile />
          <ProjectsDashboard />
        </div>
      </div>
    </main>
  );
}