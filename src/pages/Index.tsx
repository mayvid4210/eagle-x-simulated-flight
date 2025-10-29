import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flag, Trophy, Settings, Brain } from "lucide-react";
import RaceTab from "@/components/RaceTab";
import LeaderboardTab from "@/components/LeaderboardTab";
import SettingsTab from "@/components/SettingsTab";
import AIAnalysisTab from "@/components/AIAnalysisTab";
import eagleLogo from "@/assets/eagle-logo.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState("race");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header with Scroll Animation */}
      <header className={`sticky top-0 z-50 border-b border-border/50 backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'bg-background/80 py-2 shadow-glow' : 'bg-background/50 py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <img 
                src={eagleLogo} 
                alt="EagleX Logo" 
                className={`transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
              />
              <div>
                <h1 className={`font-bold font-orbitron bg-gradient-sunrise bg-clip-text text-transparent transition-all duration-500 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  EagleX
                </h1>
                <p className={`text-xs text-muted-foreground font-['Inter'] transition-all duration-500 ${
                  scrolled ? 'opacity-0 h-0' : 'opacity-100'
                }`}>
                  Mobility Simulator
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 font-orbitron">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow shadow-gold-glow"></div>
                LIVE RACE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 bg-translucent border border-primary/20 p-1 shadow-elegant">
            <TabsTrigger 
              value="race" 
              className="data-[state=active]:bg-gradient-sunrise data-[state=active]:text-primary-foreground data-[state=active]:shadow-interactive transition-all duration-300 font-orbitron hover:bg-primary/10"
            >
              <Flag className="w-4 h-4 mr-2" />
              Race
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard"
              className="data-[state=active]:bg-gradient-sunrise data-[state=active]:text-primary-foreground data-[state=active]:shadow-interactive transition-all duration-300 font-orbitron hover:bg-primary/10"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger 
              value="settings"
              className="data-[state=active]:bg-gradient-sunrise data-[state=active]:text-primary-foreground data-[state=active]:shadow-interactive transition-all duration-300 font-orbitron hover:bg-primary/10"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger 
              value="ai-analysis"
              className="data-[state=active]:bg-gradient-sunrise data-[state=active]:text-primary-foreground data-[state=active]:shadow-interactive transition-all duration-300 font-orbitron hover:bg-primary/10"
            >
              <Brain className="w-4 h-4 mr-2" />
              AI Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="race" className="animate-glide-in">
            <RaceTab />
          </TabsContent>
          <TabsContent value="leaderboard" className="animate-glide-in">
            <LeaderboardTab />
          </TabsContent>
          <TabsContent value="settings" className="animate-glide-in">
            <SettingsTab />
          </TabsContent>
          <TabsContent value="ai-analysis" className="animate-glide-in">
            <AIAnalysisTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="font-['Inter']">EagleX – Next Generation Mobility Simulator</p>
          <p className="text-xs mt-1">Powered by AI • Real-time insights • Formula E & Autonomous Systems</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
