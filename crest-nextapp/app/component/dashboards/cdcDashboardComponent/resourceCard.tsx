"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Cpu, HardDrive, MemoryStick } from "lucide-react";

interface ResourceChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
}

const getIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case "cpu usage":
      return <Cpu className="w-5 h-5 text-[#4390A3]" />;
    case "memory usage":
      return <MemoryStick className="w-5 h-5 text-[#4390A3]" />;
    case "storage usage":
      return <HardDrive className="w-5 h-5 text-[#4390A3]" />;
    default:
      return null;
  }
};

export function ResourceChart({ data, title }: ResourceChartProps) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        {getIcon(title)}
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-2 shadow-lg rounded-lg border">
                      <p className="text-sm font-medium text-[#2b424e]">{payload[0].name}</p>
                      <p className="text-sm text-gray-500">{payload[0].value}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
