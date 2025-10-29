import { Agent } from "./RaceTab";
import { Progress } from "@/components/ui/progress";

interface NeuroDriveMeterProps {
  agent: Agent;
}

const NeuroDriveMeter = ({ agent }: NeuroDriveMeterProps) => {
  const getFocusColor = (focus: number) => {
    if (focus > 80) return "hsl(142 76% 36%)"; // green
    if (focus > 60) return "hsl(43 96% 56%)"; // yellow
    return "hsl(0 84% 60%)"; // red
  };

  const getStressColor = (stress: number) => {
    if (stress > 70) return "hsl(0 84% 60%)"; // red
    if (stress > 50) return "hsl(43 96% 56%)"; // yellow
    return "hsl(142 76% 36%)"; // green
  };

  return (
    <div className="p-2 rounded-lg bg-gradient-translucent border border-primary/10 hover:border-primary/30 transition-all">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold font-orbitron">{agent.name}</span>
        <div 
          className="w-5 h-5 rounded-full shadow-lg" 
          style={{ 
            backgroundColor: agent.color,
            boxShadow: `0 0 10px ${agent.color}80`
          }}
        ></div>
      </div>
      
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-muted-foreground">Focus</span>
            <span className="font-mono font-bold" style={{ color: getFocusColor(agent.focus) }}>{agent.focus}%</span>
          </div>
          <Progress value={agent.focus} className="h-1.5" style={{ backgroundColor: 'hsl(220 20% 20%)' }} />
        </div>

        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-muted-foreground">Stress</span>
            <span className="font-mono font-bold" style={{ color: getStressColor(agent.stress) }}>{agent.stress}%</span>
          </div>
          <Progress value={agent.stress} className="h-1.5" style={{ backgroundColor: 'hsl(220 20% 20%)' }} />
        </div>
      </div>
    </div>
  );
};

export default NeuroDriveMeter;
