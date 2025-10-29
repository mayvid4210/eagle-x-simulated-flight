import { Agent } from "./RaceTab";
import raceTrackHero from "@/assets/race-track-hero.jpg";

interface RaceTrackProps {
  agents: Agent[];
}

const RaceTrack = ({ agents }: RaceTrackProps) => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-elegant">
      {/* Background Track Image */}
      <img 
        src={raceTrackHero} 
        alt="Race Track" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay for better agent visibility */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]"></div>

      {/* Circular Track Path - Clean, no dotted border */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {/* Track outline - subtle glow */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="hsl(217 91% 60% / 0.2)"
          strokeWidth="2"
        />
        
        {/* Racing Agents */}
        {agents.map((agent) => {
          const angleRad = (agent.angle * Math.PI) / 180;
          const x = 200 + 140 * Math.cos(angleRad);
          const y = 200 + 140 * Math.sin(angleRad);
          
          return (
            <g key={agent.id}>
              {/* Motion Trail */}
              <circle
                cx={x}
                cy={y}
                r="12"
                fill={agent.color}
                opacity="0.2"
                className="animate-pulse"
              />
              
              {/* Agent */}
              <circle
                cx={x}
                cy={y}
                r="6"
                fill={agent.color}
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-100 cursor-pointer hover:r-8"
              >
                <title>{agent.name} - Speed: {agent.speed.toFixed(0)} km/h</title>
              </circle>
              
              {/* Agent Label */}
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="bold"
                className="pointer-events-none font-['Orbitron']"
              >
                {agent.position}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mini Map - Translucent Corner Box */}
      <div className="absolute top-4 right-4 w-28 h-28 bg-translucent rounded-lg border border-primary/30 p-3 shadow-glow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(217 91% 60% / 0.5)" strokeWidth="2" />
          <circle cx="50" cy="50" r="40" fill="hsl(217 91% 60% / 0.05)" />
          {agents.map((agent) => {
            const angleRad = (agent.angle * Math.PI) / 180;
            const x = 50 + 40 * Math.cos(angleRad);
            const y = 50 + 40 * Math.sin(angleRad);
            return (
              <circle
                key={agent.id}
                cx={x}
                cy={y}
                r="3.5"
                fill={agent.color}
                className="drop-shadow-lg"
              />
            );
          })}
        </svg>
        <p className="text-[9px] text-center text-secondary font-semibold mt-1 font-orbitron tracking-wider">TRACK MAP</p>
      </div>
    </div>
  );
};

export default RaceTrack;
