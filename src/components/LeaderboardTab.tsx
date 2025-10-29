import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Zap, Award } from "lucide-react";

interface LeaderboardEntry {
  position: number;
  name: string;
  team: string;
  flag: string;
  lap: number;
  bestTime: string;
  pitStops: number;
  energy: number;
  events: string[];
  avatar: string;
}

const LeaderboardTab = () => {
  const leaderboard: LeaderboardEntry[] = [
    {
      position: 1,
      name: "EagleX-01",
      team: "Team EagleX",
      flag: "🇺🇸",
      lap: 2,
      bestTime: "1:23.451",
      pitStops: 1,
      energy: 85,
      events: ["🏁", "⚡", "🎯"],
      avatar: "#3B82F6",
    },
    {
      position: 2,
      name: "Phoenix-22",
      team: "Team Phoenix",
      flag: "🇬🇧",
      lap: 2,
      bestTime: "1:23.892",
      pitStops: 1,
      energy: 78,
      events: ["⚡", "🔧"],
      avatar: "#EF4444",
    },
    {
      position: 3,
      name: "Falcon-33",
      team: "Team Falcon",
      flag: "🇩🇪",
      lap: 2,
      bestTime: "1:24.123",
      pitStops: 0,
      energy: 92,
      events: ["🎯", "💨"],
      avatar: "#10B981",
    },
    {
      position: 4,
      name: "Hawk-44",
      team: "Team Hawk",
      flag: "🇮🇹",
      lap: 2,
      bestTime: "1:24.456",
      pitStops: 2,
      energy: 68,
      events: ["🔧", "🔧", "⚡"],
      avatar: "#F59E0B",
    },
    {
      position: 5,
      name: "Condor-55",
      team: "Team Condor",
      flag: "🇫🇷",
      lap: 2,
      bestTime: "1:24.789",
      pitStops: 1,
      energy: 82,
      events: ["🎯"],
      avatar: "#8B5CF6",
    },
    {
      position: 6,
      name: "Osprey-66",
      team: "Team Osprey",
      flag: "🇯🇵",
      lap: 2,
      bestTime: "1:25.012",
      pitStops: 1,
      energy: 71,
      events: ["💨", "⚡"],
      avatar: "#EC4899",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Trend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-primary shadow-glow">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary-foreground" />
            <div>
              <div className="text-sm text-primary-foreground/80">Biggest Climber</div>
              <div className="text-lg font-bold text-primary-foreground">Falcon-33</div>
              <div className="text-xs text-primary-foreground/70">+2 positions</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-secondary shadow-gold-glow">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-secondary-foreground" />
            <div>
              <div className="text-sm text-secondary-foreground/80">Fastest Lap</div>
              <div className="text-lg font-bold text-secondary-foreground">EagleX-01</div>
              <div className="text-xs text-secondary-foreground/70">1:23.451</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Consistency King</div>
              <div className="text-lg font-bold">Falcon-33</div>
              <div className="text-xs text-muted-foreground">0 pit stops</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Leaderboard Table */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h2 className="text-2xl font-bold mb-6 font-['Orbitron'] flex items-center gap-2">
          <Trophy className="w-6 h-6 text-secondary" />
          Full Rankings
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-['Orbitron'] text-sm">Pos</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Driver</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Team</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Lap</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Best Time</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Pit Stops</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Energy</th>
                <th className="pb-3 font-['Orbitron'] text-sm">Events</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr 
                  key={entry.position}
                  className={`border-b border-border/50 hover:bg-muted/30 transition-smooth ${
                    idx === 0 ? 'bg-secondary/10' : ''
                  }`}
                >
                  <td className="py-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-['Orbitron'] ${
                      idx === 0 ? 'bg-gradient-secondary shadow-gold-glow text-secondary-foreground' : 'bg-muted'
                    }`}>
                      {entry.position}
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: entry.avatar }}
                      ></div>
                      <div>
                        <div className="font-semibold">{entry.name}</div>
                        <div className="text-xs text-muted-foreground">{entry.flag}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{entry.team}</td>
                  <td className="py-4 font-mono text-sm">{entry.lap}</td>
                  <td className="py-4 font-mono text-sm text-primary">{entry.bestTime}</td>
                  <td className="py-4 text-sm">{entry.pitStops}</td>
                  <td className="py-4">
                    <Badge variant={entry.energy > 80 ? "default" : entry.energy > 60 ? "secondary" : "destructive"}>
                      {entry.energy}%
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-1">
                      {entry.events.map((event, i) => (
                        <span key={i} className="text-lg">{event}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardTab;
