import { Agent } from "./RaceTab";
import { Card } from "@/components/ui/card";
import { Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MiniLeaderboardProps {
  agents: Agent[];
}

const MiniLeaderboard = ({ agents }: MiniLeaderboardProps) => {
  const [expanded, setExpanded] = useState(false);
  const sortedAgents = [...agents].sort((a, b) => a.position - b.position);
  const displayAgents = expanded ? sortedAgents : sortedAgents.slice(0, 3);

  return (
    <Card className="bg-translucent border-primary/30 shadow-glow overflow-hidden interactive-card">
      <div className="p-4 border-b border-primary/20 bg-gradient-sunrise">
        <h3 className="text-base font-bold font-orbitron flex items-center gap-2 text-primary-foreground">
          <Trophy className="w-5 h-5 text-secondary" />
          LIVE STANDINGS
        </h3>
      </div>
      
      <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto">
        {displayAgents.map((agent, idx) => (
          <div 
            key={agent.id} 
            className={`flex items-center justify-between p-3 rounded-lg transition-all hover:bg-primary/10 cursor-pointer
              ${idx < 3 ? 'bg-gradient-translucent border border-secondary/20' : 'bg-muted/20'}
            `}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-orbitron shadow-lg"
                style={{ 
                  backgroundColor: agent.color,
                  boxShadow: `0 0 15px ${agent.color}60`
                }}
              >
                {agent.position}
              </div>
              <div>
                <div className="font-semibold text-sm">{agent.name}</div>
                <div className="text-xs text-muted-foreground">Lap {agent.lap}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-mono font-semibold">{agent.speed.toFixed(0)}</div>
              <div className="text-xs text-secondary">km/h</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-primary/20 bg-translucent-light">
        <Button
          variant="ghost"
          className="w-full text-xs font-orbitron hover:bg-primary/20 hover:text-primary transition-all"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Show All Drivers
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default MiniLeaderboard;
