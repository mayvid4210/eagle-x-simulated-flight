import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Zap, Target, ChevronDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import WhatIfSimulator from "./WhatIfSimulator";
import TrackHeatmap from "./TrackHeatmap";

const AIAnalysisTab = () => {
  const [expandedDecision, setExpandedDecision] = useState<number | null>(null);
  
  const lapData = [
    { lap: 1, eaglex: 87, phoenix: 82, falcon: 89 },
    { lap: 2, eaglex: 91, phoenix: 85, falcon: 92 },
    { lap: 3, eaglex: 89, phoenix: 88, falcon: 90 },
  ];

  const energyData = [
    { agent: "EagleX-01", consumption: 78 },
    { agent: "Phoenix-22", consumption: 85 },
    { agent: "Falcon-33", consumption: 72 },
    { agent: "Hawk-44", consumption: 88 },
    { agent: "Condor-55", consumption: 80 },
  ];

  const decisions = [
    { time: "Lap 1, T3", agent: "EagleX-01", decision: "Optimal pit stop timing", reason: "Battery at 45%, next 2 laps energy-intensive" },
    { time: "Lap 2, T1", agent: "Falcon-33", decision: "Aggressive overtake", reason: "95% focus level, clear racing line detected" },
    { time: "Lap 2, T4", agent: "Phoenix-22", decision: "Conservative approach", reason: "High stress (68%), prioritizing consistency" },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 bg-translucent border-primary/30 shadow-glow interactive-card">
          <div className="flex items-center gap-3">
            <Brain className="w-10 h-10 text-primary drop-shadow-lg" />
            <div>
              <div className="text-xs text-muted-foreground font-orbitron">AVG FOCUS</div>
              <div className="text-3xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent">86%</div>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-translucent border-green-500/30 shadow-glow interactive-card">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-500 drop-shadow-lg" />
            <div>
              <div className="text-xs text-muted-foreground font-orbitron">PERFORMANCE</div>
              <div className="text-3xl font-bold text-green-500 font-orbitron">+12%</div>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-translucent border-secondary/30 shadow-gold-glow interactive-card">
          <div className="flex items-center gap-3">
            <Zap className="w-10 h-10 text-secondary drop-shadow-lg" />
            <div>
              <div className="text-xs text-muted-foreground font-orbitron">ENERGY SAVED</div>
              <div className="text-3xl font-bold text-secondary font-orbitron">18%</div>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-translucent border-purple-500/30 shadow-glow interactive-card">
          <div className="flex items-center gap-3">
            <Target className="w-10 h-10 text-purple-500 drop-shadow-lg" />
            <div>
              <div className="text-xs text-muted-foreground font-orbitron">DECISIONS</div>
              <div className="text-3xl font-bold text-purple-500 font-orbitron">247</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Advanced Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lap Performance Chart */}
        <Card className="lg:col-span-2 bg-translucent border-primary/30 shadow-elegant interactive-card overflow-hidden">
          <div className="p-4 border-b border-primary/20 bg-gradient-primary">
            <h3 className="text-lg font-bold font-orbitron text-primary-foreground">FOCUS LEVELS BY LAP</h3>
          </div>
          <div className="p-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lapData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="lap" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Line type="monotone" dataKey="eaglex" stroke="#3B82F6" strokeWidth={2} name="EagleX-01" />
              <Line type="monotone" dataKey="phoenix" stroke="#EF4444" strokeWidth={2} name="Phoenix-22" />
              <Line type="monotone" dataKey="falcon" stroke="#10B981" strokeWidth={2} name="Falcon-33" />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </Card>

        {/* Track Heatmap */}
        <TrackHeatmap />
      </div>

      {/* What-If Simulator & Energy Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WhatIfSimulator />

        {/* Energy Consumption Chart */}
        <Card className="bg-translucent border-primary/30 shadow-elegant interactive-card overflow-hidden">
          <div className="p-4 border-b border-primary/20 bg-gradient-primary">
            <h3 className="text-lg font-bold font-orbitron text-primary-foreground">ENERGY CONSUMPTION</h3>
          </div>
          <div className="p-6">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="agent" stroke="hsl(var(--foreground))" angle={-15} textAnchor="end" height={80} />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="consumption" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Decision Log - Expandable */}
      <Card className="bg-translucent border-primary/30 shadow-elegant overflow-hidden">
        <div className="p-4 border-b border-primary/20 bg-gradient-primary">
          <h3 className="text-lg font-bold font-orbitron text-primary-foreground flex items-center gap-2">
            <Brain className="w-6 h-6 text-secondary" />
            AI DECISION LOG
          </h3>
        </div>
        <div className="p-6 space-y-3">
          {decisions.map((decision, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-translucent rounded-lg border-l-4 border-secondary overflow-hidden interactive-card"
            >
              <div 
                className="p-4 cursor-pointer hover:bg-primary/5"
                onClick={() => setExpandedDecision(expandedDecision === idx ? null : idx)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-muted-foreground font-mono">{decision.time}</span>
                    <h4 className="font-bold text-sm font-orbitron">{decision.agent}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-orbitron">AI</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${expandedDecision === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
                <p className="text-sm font-medium">{decision.decision}</p>
                
                {expandedDecision === idx && (
                  <div className="mt-3 pt-3 border-t border-primary/20 animate-glide-in space-y-2">
                    <p className="text-xs text-muted-foreground">{decision.reason}</p>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="bg-background/30 p-2 rounded">
                        <div className="text-[10px] text-muted-foreground">Confidence</div>
                        <div className="text-sm font-bold text-green-500">94%</div>
                      </div>
                      <div className="bg-background/30 p-2 rounded">
                        <div className="text-[10px] text-muted-foreground">Impact</div>
                        <div className="text-sm font-bold text-secondary">+2.1s</div>
                      </div>
                      <div className="bg-background/30 p-2 rounded">
                        <div className="text-[10px] text-muted-foreground">Risk</div>
                        <div className="text-sm font-bold text-primary">Low</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* NeuroDrive Demo */}
      <Card className="overflow-hidden shadow-glow">
        <div className="p-6 bg-gradient-sunrise">
          <h3 className="text-xl font-bold mb-3 font-orbitron text-primary-foreground flex items-center gap-2">
            <Brain className="w-6 h-6" />
            NEURODRIVE IMPACT DEMO
          </h3>
          <p className="text-sm text-primary-foreground/90 mb-4">
            Compare lap performance with and without NeuroDrive AI assistance
          </p>
        </div>
        
        <div className="p-6 bg-translucent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-translucent backdrop-blur-sm p-5 rounded-lg border border-muted/30 interactive-card">
              <div className="text-xs text-muted-foreground mb-2 font-orbitron">WITHOUT NEURODRIVE</div>
              <div className="text-3xl font-bold font-orbitron">1:26.832</div>
              <div className="text-xs text-muted-foreground mt-1">Average Lap Time</div>
            </div>
            <div className="bg-gradient-translucent backdrop-blur-sm p-5 rounded-lg border-2 border-secondary shadow-gold-glow interactive-card">
              <div className="text-xs text-secondary mb-2 font-orbitron">WITH NEURODRIVE</div>
              <div className="text-3xl font-bold text-secondary font-orbitron">1:24.123</div>
              <div className="text-xs text-green-400 font-bold mt-1">-2.7 seconds faster!</div>
            </div>
          </div>
          <Button 
            className="w-full bg-gradient-sunrise hover:shadow-interactive transition-all font-orbitron"
          >
            View Detailed Comparison
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AIAnalysisTab;
