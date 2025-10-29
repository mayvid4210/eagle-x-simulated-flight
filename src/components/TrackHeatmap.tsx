import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

const TrackHeatmap = () => {
  // Simulate heatmap data points on circular track
  const heatmapPoints = [
    { angle: 45, intensity: 85, type: "overtake" },
    { angle: 135, intensity: 92, type: "crash" },
    { angle: 225, intensity: 65, type: "overtake" },
    { angle: 315, intensity: 78, type: "overtake" },
  ];

  return (
    <Card className="bg-translucent border-primary/30 shadow-glow overflow-hidden">
      <div className="p-4 border-b border-primary/20 bg-gradient-primary">
        <h3 className="text-lg font-bold font-orbitron text-primary-foreground flex items-center gap-2">
          <Flame className="w-5 h-5 text-secondary" />
          TRACK HEATMAP
        </h3>
      </div>
      
      <div className="p-6">
        <div className="relative w-full aspect-square max-w-[300px] mx-auto">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Track outline */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="3"
            />
            
            {/* Heatmap zones */}
            {heatmapPoints.map((point, idx) => {
              const angleRad = (point.angle * Math.PI) / 180;
              const x = 100 + 70 * Math.cos(angleRad);
              const y = 100 + 70 * Math.sin(angleRad);
              const color = point.type === "crash" ? "#EF4444" : "#F59E0B";
              
              return (
                <g key={idx}>
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={color}
                    opacity={point.intensity / 100 * 0.3}
                    className="animate-pulse"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={color}
                    opacity={point.intensity / 100}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3 text-xs">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span className="font-semibold">High Overtake Zone</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="font-semibold">Crash Risk Area</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrackHeatmap;
