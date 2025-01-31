"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Sidebar } from "./sidebar";
import { MetricsCard } from "./metricsCard";
import { ResourceChart } from "./resourceCard";
import { TooltipProvider } from "./tooltip";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Step } from "react-joyride"; // ✅ Import Step type

// 🛠 Dynamically import Joyride to fix hydration issues
const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

const uptimeData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  value: 95 + Math.random() * 5,
}));

const resourceData = {
  cpu: [
    { name: "Used", value: 65, color: "#4390A3" },
    { name: "Available", value: 35, color: "#90C6D0" },
  ],
  memory: [
    { name: "Used", value: 80, color: "#4390A3" },
    { name: "Available", value: 20, color: "#90C6D0" },
  ],
  storage: [
    { name: "Used", value: 45, color: "#4390A3" },
    { name: "Available", value: 55, color: "#90C6D0" },
  ],
};

export default function InteractiveDashboardComponent() {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    setTimeout(() => setRunTour(true), 1000); // Delay to ensure UI is fully loaded
  }, []);

  // ✅ Explicitly type steps as Step[]
  const steps: Step[] = [
    {
      target: "#metrics-section",
      content: "📊 Here is the **Metrics Overview** displaying key cloud statistics.",
      placement: "bottom" as const, // ✅ Fix placement typing
    },
    {
      target: "#resource-section",
      content: "🔥 This section **monitors CPU, Memory, and Storage usage** in real-time.",
      placement: "bottom" as const, // ✅ Fix placement typing
    },
    {
      target: "#uptime-section",
      content: "⏳ The **System Uptime Chart** tracks system availability over the last 24 hours.",
      placement: "top" as const, // ✅ Fix placement typing
    },
  ];

  return (
    <TooltipProvider>
      {/* 🎯 Joyride Tour */}
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        disableScrolling={true} // ✅ Keeps viewport stable
        styles={{
          options: {
            zIndex: 1000,
            arrowColor: "#4390A3",
            backgroundColor: "#ffffff",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#4390A3",
            textColor: "#2b424e",
          },
        }}
      />

      <div className="w-full min-h-0 flex justify-center p-4">
        <div className="flex flex-col lg:flex-row bg-[#f1f9fa] rounded-xl overflow-hidden w-full max-w-[1400px] min-h-[600px] shadow-lg">
          <div className="lg:min-h-full">
            <Sidebar />
          </div>
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {/* 🔹 Overview Metrics */}
            <div id="metrics-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <MetricsCard
                title="Cloud Resources"
                value="85%"
                change={{ value: 2.6, timeframe: "vs last week" }}
                trend={{ data: [40, 60, 75, 65, 70, 85, 80], color: "#4390A3" }}
                info="Percentage of cloud resources currently in use"
              />
              <MetricsCard
                title="Active Clusters"
                value="4/5"
                change={{ value: -1, timeframe: "vs last week" }}
                trend={{ data: [5, 5, 5, 4, 4, 4, 4], color: "#4390A3" }}
                info="Number of active clusters out of total available"
              />
              <MetricsCard
                title="System Uptime"
                value="99.9%"
                change={{ value: 0.1, timeframe: "vs last month" }}
                trend={{
                  data: [99, 99.5, 99.9, 99.9, 99.9, 99.9, 99.9],
                  color: "#4390A3",
                }}
                info="System availability over time"
              />
            </div>

            {/* 🔹 Resource Charts */}
            <div id="resource-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <ResourceChart data={resourceData.cpu} title="CPU Usage" />
              <ResourceChart data={resourceData.memory} title="Memory Usage" />
              <ResourceChart data={resourceData.storage} title="Storage Usage" />
            </div>

            {/* 🔹 System Uptime Chart */}
            <div id="uptime-section" className="bg-white rounded-xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-4">System Uptime (Last 24 Hours)</h3>
              <div className="h-[280px] w-full">
                <ResponsiveContainer>
                  <BarChart data={uptimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis domain={[90, 100]} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload?.length && payload[0]?.value !== undefined) {
                          return (
                            <div className="bg-white p-2 shadow-lg rounded-lg border">
                              <p className="text-sm font-medium text-[#2b424e]">
                                Hour {payload[0]?.payload?.hour}:00
                              </p>
                              <p className="text-sm text-gray-500">
                                {Number(payload[0]?.value)?.toFixed(2) ?? "N/A"}% uptime
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value" fill="#4390A3" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
