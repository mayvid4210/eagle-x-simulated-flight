import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import RaceTrack from "./RaceTrack";
import MiniLeaderboard from "./MiniLeaderboard";
import NeuroDriveMeter from "./NeuroDriveMeter";
import { toast } from "sonner";

export interface Agent {
  id: number;
  name: string;
  color: string;
  position: number;
  lap: number;
  speed: number;
  focus: number;
  stress: number;
  angle: number;
}

const RaceTab = () => {
  const [agents, setAgents] = useState<Agent[]>([
    { id: 1, name: "EagleX-01", color: "#3B82F6", position: 1, lap: 2, speed: 285, focus: 85, stress: 45, angle: 0 },
    { id: 2, name: "Phoenix-22", color: "#EF4444", position: 2, lap: 2, speed: 278, focus: 78, stress: 52, angle: 30 },
    { id: 3, name: "Falcon-33", color: "#10B981", position: 3, lap: 2, speed: 272, focus: 92, stress: 38, angle: 60 },
    { id: 4, name: "Hawk-44", color: "#F59E0B", position: 4, lap: 2, speed: 268, focus: 72, stress: 58, angle: 90 },
    { id: 5, name: "Condor-55", color: "#8B5CF6", position: 5, lap: 2, speed: 265, focus: 88, stress: 42, angle: 120 },
    { id: 6, name: "Osprey-66", color: "#EC4899", position: 6, lap: 2, speed: 261, focus: 65, stress: 68, angle: 150 },
  ]);

  const [commentary, setCommentary] = useState<string[]>([
    "Race in progress - Lap 2 of 3",
    "EagleX-01 maintains the lead with incredible focus",
  ]);

  useEffect(() => {
    // Simulate race progression
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent => ({
        ...agent,
        angle: (agent.angle + 2 + Math.random() * 2) % 360,
        speed: Math.max(250, Math.min(300, agent.speed + (Math.random() - 0.5) * 5)),
        focus: Math.max(50, Math.min(100, agent.focus + (Math.random() - 0.5) * 3)),
        stress: Math.max(20, Math.min(80, agent.stress + (Math.random() - 0.5) * 3)),
      })));

      // Random events
      if (Math.random() > 0.95) {
        const events = [
          "Overtake attempt on turn 3!",
          "Energy management critical for leaders",
          "Perfect racing line by EagleX-01",
          "Battery optimization in progress",
          "NeuroDrive adjusting focus levels",
        ];
        const newEvent = events[Math.floor(Math.random() * events.length)];
        setCommentary(prev => [newEvent, ...prev].slice(0, 5));
        
        toast.success(newEvent, {
          description: "Live race update",
          duration: 2000,
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main Race Track - Full Width */}
      <div className="mb-6">
        <Card className="p-6 bg-translucent border-primary/30 shadow-elegant interactive-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-orbitron flex items-center gap-2 bg-gradient-sunrise bg-clip-text text-transparent">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow shadow-glow"></div>
              LIVE RACE TRACK
            </h2>
          </div>
          <RaceTrack agents={agents} />
        </Card>
      </div>

      {/* Dashboard Grid with Corner Overlays */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Always Visible Leaderboard */}
        <div className="lg:col-span-1">
          <MiniLeaderboard agents={agents} />
        </div>

        {/* Right Column - Corner Boxes */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AI Commentary - Fixed Corner Box */}
          <Card className="bg-translucent border-secondary/30 shadow-gold-glow interactive-card h-fit">
            <div className="p-3 border-b border-secondary/20 bg-gradient-secondary">
              <h3 className="text-sm font-bold font-orbitron text-secondary-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-foreground animate-pulse"></div>
                AI COMMENTARY
              </h3>
            </div>
            <div className="p-3 space-y-2 h-[200px] overflow-hidden">
              {commentary.slice(0, 4).map((comment, idx) => (
                <div 
                  key={idx} 
                  className="text-xs p-2 bg-gradient-translucent rounded border-l-2 border-secondary animate-glide-in"
                >
                  {comment}
                </div>
              ))}
            </div>
          </Card>

          {/* NeuroDrive Status - Corner Box */}
          <Card className="bg-translucent border-primary/30 shadow-glow interactive-card h-fit">
            <div className="p-3 border-b border-primary/20 bg-gradient-primary">
              <h3 className="text-sm font-bold font-orbitron text-primary-foreground">NEURODRIVE STATUS</h3>
            </div>
            <div className="p-3 space-y-3">
              {agents.slice(0, 3).map(agent => (
                <NeuroDriveMeter key={agent.id} agent={agent} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RaceTab;
