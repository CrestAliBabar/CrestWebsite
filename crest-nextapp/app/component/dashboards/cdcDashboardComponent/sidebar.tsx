/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Home,
  FileText,
  Filter,
  Brain,
  Database,
  Waves,
  Bot,
  Server,
  Download,
  Shield,
  PlugIcon as Pipeline,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: FileText, label: "Files" },
  { icon: Filter, label: "Preprocessing", hasSubmenu: true },
  { icon: Brain, label: "Foundational ML", hasSubmenu: true },
  { icon: Database, label: "Experiments", hasSubmenu: true },
  { icon: Waves, label: "Stream Engine" },
  { icon: Bot, label: "LLM", hasSubmenu: true },
  { icon: Server, label: "Infrastructures", hasSubmenu: true },
  { icon: Download, label: "Data Grabbing" },
  { icon: Shield, label: "Data Quality" },
  { icon: Pipeline, label: "Data Pipeline" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  return (
    <div className="w-full lg:w-64 bg-[white] border-r lg:h-full flex flex-col">
      <div className="p-4 border-b flex items-center gap-2">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TItjWmub1dgDjdmRvwzOpe4CID2woz.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <span className="text-blue-600 font-medium">CREST Data Analysis</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)} // Set active item on click
              className={`flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                activeItem === item.label
                  ? "bg-blue-50 text-[#325c6c] font-semibold" // Active state color
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
              {item.hasSubmenu && (
                <svg className="w-4 h-4 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={() => setActiveItem("Settings")}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
            activeItem === "Settings"
              ? "bg-blue-50 text-[#325c6c] font-semibold" // Active state color for Settings
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
