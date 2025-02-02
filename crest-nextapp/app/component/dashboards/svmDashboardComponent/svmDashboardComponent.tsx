"use client";
import { Sidebar } from "./sidebar";
import { TooltipProvider } from "./tooltip";
import { MetricsCard } from "./metricsCard";
import { VulnerabilityTable } from "./vulnerabilityTable";
import { useState } from "react";
import { VulnerabilityTrends } from "./vulnerabilityTrends";
import { LicenseRisk } from "./licenseRisk";

export default function SvmDashboardComponent() {
  const [selectedRepo, setSelectedRepo] = useState("All repositories");
  const repositories = [
    "All repositories",
    "Repo 1",
    "Repo 2",
    "Repo 3",
    "Repo 4",
  ];

  const vulnerabilityData = [
    { month: "Jan", Critical: 5, High: 8, Medium: 12, Low: 15 },
    { month: "Feb", Critical: 4, High: 7, Medium: 10, Low: 13 },
    { month: "Mar", Critical: 6, High: 9, Medium: 14, Low: 16 },
    { month: "Apr", Critical: 3, High: 6, Medium: 11, Low: 14 },
    { month: "May", Critical: 5, High: 8, Medium: 13, Low: 15 },
    { month: "Jun", Critical: 4, High: 7, Medium: 12, Low: 14 },
  ];

  const licenseRiskData = [
    { name: "MIT", value: 45, color: "#4390A3" },
    { name: "Apache", value: 25, color: "#90C6D0" },
    { name: "GPL", value: 20, color: "#D4A017" },
    { name: "Other", value: 10, color: "#E5E7EB" },
  ];

  const vulnerabilityStats = [
    { title: "Critical", value: "5", trend: -1, color: "#DC2626" },
    { title: "High", value: "8", trend: 2, color: "#EA580C" },
    { title: "Medium", value: "12", trend: -3, color: "#D4A017" },
    { title: "Low", value: "15", trend: 1, color: "#4390A3" },
    { title: "Unknown", value: "3", trend: 0, color: "#6B7280" },
  ];

  return (
    <TooltipProvider>
      <div className="w-full min-h-0 flex justify-center p-4">
        <div className="flex flex-col lg:flex-row bg-[#f1f9fa] rounded-xl overflow-hidden w-full max-w-[1400px] min-h-[600px] shadow-lg">
          <div className="lg:min-h-full">
            <Sidebar />
          </div>
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {/* Filter Bar */}
            <div className="bg-[#F1F9FA] p-4 rounded-md flex items-center gap-4 mb-6 transition-all duration-300 ease-in-out shadow-sm">
              <label className="text-sm font-semibold">Scope</label>
              <select
                className="border rounded px-4 py-2 bg-white shadow-md transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#4390A3] focus:outline-none"
                value={selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
              >
                {repositories.map((repo) => (
                  <option key={repo} value={repo}>
                    {repo}
                  </option>
                ))}
              </select>
              <input
                type="date"
                className="border rounded px-4 py-2 bg-white shadow-md transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#4390A3] focus:outline-none"
              />
            </div>
            {/* Vulnerability Stats */}
            <div
              id="metrics-section"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-8"
            >
              {vulnerabilityStats.map((stat) => (
                <MetricsCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  change={{ value: stat.trend, timeframe: "vs last week" }}
                  trend={{
                    data: [40, 60, 75, 65, 70, 85, 80],
                    color: stat.color,
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Vulnerability Trends */}
              <VulnerabilityTrends data={vulnerabilityData} />

              {/* License Risks */}
              <LicenseRisk data={licenseRiskData} />
            </div>

            {/* Vulnerability Table */}
            <VulnerabilityTable />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
