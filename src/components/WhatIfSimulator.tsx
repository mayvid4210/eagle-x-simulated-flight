import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, RefreshCw } from "lucide-react";

const WhatIfSimulator = () => {
  const [scenario, setScenario] = useState("pit-stop");
  const [parameter, setParameter] = useState([50]);
  const [simulated, setSimulated] = useState(false);

  const handleSimulate = () => {
    setSimulated(true);
    setTimeout(() => setSimulated(false), 3000);
  };

  const getScenarioLabel = () => {
    switch(scenario) {
      case "pit-stop": return "Pit Stop Timing (Lap)";
      case "focus": return "Focus Level (%)";
      case "energy": return "Energy Conservation (%)";
      default: return "Parameter";
    }
  };

  return (
    <Card className="bg-translucent border-secondary/30 shadow-gold-glow overflow-hidden">
      <div className="p-4 border-b border-secondary/20 bg-gradient-secondary">
        <h3 className="text-lg font-bold font-orbitron text-secondary-foreground flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          WHAT-IF SIMULATOR
        </h3>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-semibold font-orbitron">Scenario</label>
          <Select value={scenario} onValueChange={setScenario}>
            <SelectTrigger className="bg-translucent-light border-primary/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pit-stop">Earlier Pit Stop</SelectItem>
              <SelectItem value="focus">Higher Focus Level</SelectItem>
              <SelectItem value="energy">Energy Conservation</SelectItem>
              <SelectItem value="overtake">Aggressive Overtaking</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold font-orbitron flex justify-between">
            <span>{getScenarioLabel()}</span>
            <span className="text-secondary">{parameter[0]}</span>
          </label>
          <Slider
            value={parameter}
            onValueChange={setParameter}
            min={0}
            max={100}
            step={5}
            className="w-full"
          />
        </div>

        <Button
          onClick={handleSimulate}
          className="w-full bg-gradient-sunrise hover:shadow-interactive transition-all font-orbitron"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${simulated ? 'animate-spin' : ''}`} />
          Run Simulation
        </Button>

        {simulated && (
          <div className="mt-4 p-4 bg-gradient-translucent border border-primary/20 rounded-lg animate-glide-in space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Predicted Result:</span>
              <span className="text-lg font-bold text-secondary">-2.3s</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Simulation shows {parameter[0]}% parameter would improve lap time by 2.3 seconds with 87% confidence.
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default WhatIfSimulator;
