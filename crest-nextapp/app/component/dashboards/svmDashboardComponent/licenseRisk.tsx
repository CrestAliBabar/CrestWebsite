"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

interface LicenseRiskProps {
  data: { name: string; value: number; color: string }[];
}

export function LicenseRisk({ data }: LicenseRiskProps) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-4">License Risks</h3>
      <div className="h-[280px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 shadow-lg rounded-lg border">
                      <p className="text-sm font-medium">{data.name}</p>
                      <p className="text-sm text-gray-500">{data.value}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
