import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Settings, Palette, Users, Zap, Volume2, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SettingsTab = () => {
  const [agentCount, setAgentCount] = useState([6]);
  const [raceDuration, setRaceDuration] = useState([3]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleSave = () => {
    toast.success("Settings saved successfully!", {
      description: "Your race configuration has been updated.",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Appearance Settings */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold mb-4 font-['Orbitron'] flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          Appearance
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="theme">Theme</Label>
            <Select defaultValue="eagle">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eagle">Eagle Theme</SelectItem>
                <SelectItem value="plain">Plain</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="sound">Sound Effects</Label>
            <Switch 
              id="sound" 
              checked={soundEnabled} 
              onCheckedChange={setSoundEnabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="bg">Eagle Background</Label>
            <Switch id="bg" defaultChecked />
          </div>
        </div>
      </Card>

      {/* Agent Customization */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold mb-4 font-['Orbitron'] flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Agent Configuration
        </h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Number of Agents</Label>
              <span className="text-sm font-bold text-primary">{agentCount[0]}</span>
            </div>
            <Slider 
              value={agentCount} 
              onValueChange={setAgentCount}
              min={3}
              max={12}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="track">Track Shape</Label>
            <Select defaultValue="circular">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="circular">Circular</SelectItem>
                <SelectItem value="oval">Oval</SelectItem>
                <SelectItem value="complex">Complex Circuit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Race Features */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold mb-4 font-['Orbitron'] flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          Race Features
        </h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Race Duration (Laps)</Label>
              <span className="text-sm font-bold text-primary">{raceDuration[0]}</span>
            </div>
            <Slider 
              value={raceDuration} 
              onValueChange={setRaceDuration}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="pitstops">Enable Pit Stops</Label>
            <Switch id="pitstops" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="crashes">Enable Crashes</Label>
            <Switch id="crashes" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="weather">Dynamic Weather</Label>
            <Switch id="weather" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="powerups">Power-ups</Label>
            <Switch id="powerups" />
          </div>
        </div>
      </Card>

      {/* Commentary & AI */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-xl font-bold mb-4 font-['Orbitron'] flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-primary" />
          Commentary & AI
        </h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="commentary">Commentary Style</Label>
            <Select defaultValue="serious">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="serious">Serious Eagle (Classic)</SelectItem>
                <SelectItem value="fun">Fun Eagle (Casual)</SelectItem>
                <SelectItem value="silent">Silent Mode</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="neurodrive">Enable NeuroDrive</Label>
            <Switch id="neurodrive" defaultChecked />
          </div>

          <div>
            <Label htmlFor="ai-depth">AI Simulation Depth</Label>
            <Select defaultValue="medium">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="deep">Deep Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="lg:col-span-2">
        <Button 
          onClick={handleSave}
          className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-['Orbitron']"
          size="lg"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default SettingsTab;
