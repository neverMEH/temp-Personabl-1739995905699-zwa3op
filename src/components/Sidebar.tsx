import React from "react";
import { Users, Database, Brain, BarChart2, Presentation, Settings, User } from "lucide-react";
import { Logo } from "./Logo";
type BotType = "audience" | "sql" | "dsp" | "visualization" | "media" | "settings" | "profile" | "dashboard";
interface SidebarProps {
  activeBotType: BotType;
  onBotChange: (type: BotType) => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  activeBotType,
  onBotChange
}) => {
  const botIcons = [{
    type: "audience" as BotType,
    icon: Users,
    label: "Audience AI Bot"
  }, {
    type: "sql" as BotType,
    icon: Database,
    label: "AMC SQL AI Bot"
  }, {
    type: "visualization" as BotType,
    icon: BarChart2,
    label: "AMC Visualization Bot"
  }];
  return <div className="w-12 md:w-16 h-screen bg-gray-100 border-r border-gray-200 flex flex-col items-center py-2 md:py-4">
      <Logo onClick={() => onBotChange("dashboard")} />
      <div className="flex-1">
        {botIcons.map(({
        type,
        icon: Icon,
        label
      }) => <div key={type} className="relative group mb-2 md:mb-4">
            <button onClick={() => onBotChange(type)} className={`p-2 md:p-3 rounded-lg transition-all duration-200 ${activeBotType === type ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}>
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {label}
            </div>
          </div>)}
      </div>
      <div className="mt-auto">
        <div className="relative group mb-2 md:mb-4">
          <button onClick={() => onBotChange("profile")} className={`p-2 md:p-3 rounded-lg transition-all duration-200 ${activeBotType === "profile" ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}>
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            Profile
          </div>
        </div>
        <div className="relative group">
          <button onClick={() => onBotChange("settings")} className={`p-2 md:p-3 rounded-lg transition-all duration-200 ${activeBotType === "settings" ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}>
            <Settings className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            Settings
          </div>
        </div>
      </div>
    </div>;
};