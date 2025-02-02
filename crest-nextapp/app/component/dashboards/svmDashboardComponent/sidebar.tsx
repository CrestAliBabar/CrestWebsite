import React, { useState } from "react";
import { Lock, Box, Shield, Link2, FileText, Settings } from "lucide-react";

const navigation = [
  { name: "Overview", href: "/", icon: Box },
  { name: "Vulnerabilities", href: "/vulnerabilities", icon: Shield },
  { name: "Dependencies", href: "/dependencies", icon: Link2 },
  { name: "Licenses", href: "/licenses", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Overview"); // Default active item

  return (
    <div className="w-full lg:w-64 bg-white border-r lg:h-full flex flex-col">
      <div className="p-4 border-b flex items-center gap-2">
        <Lock className="h-6 w-6 text-gray-600" />
        <span className="text-blue-600 font-medium">SVM Dashboard</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)} // Set active item on click
              className={`flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                activeItem === item.name
                  ? "bg-blue-50 text-[#325c6c] font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={() => setActiveItem("Settings")}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
            activeItem === "Settings"
              ? "bg-blue-50 text-[#325c6c] font-semibold"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
