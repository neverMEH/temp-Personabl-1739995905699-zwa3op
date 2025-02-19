import React, { useState } from "react";
import { ChatMessage } from "./components/ChatMessage";
import { ChatInput } from "./components/ChatInput";
import { Sidebar } from "./components/Sidebar";
import { QuickPrompts } from "./components/QuickPrompts";
import { ProfilePage } from "./components/pages/ProfilePage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { DashboardPage } from "./components/pages/DashboardPage";
import { AudienceChatInput } from "./components/AudienceChatInput";
import { SQLChatInput } from "./components/SQLChatInput";
import { Pencil, Check } from "lucide-react";
import { VisualizationChatInput } from "./components/VisualizationChatInput";
type BotType = "audience" | "sql" | "dsp" | "visualization" | "media" | "settings" | "profile" | "dashboard";
export function App() {
  const [activeBotType, setActiveBotType] = useState<BotType>("dashboard");
  const [chatTitle, setChatTitle] = useState("New Conversation");
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(chatTitle);
  const messages = [{
    content: "Hello! How can I assist you with SQL queries today?",
    isAI: true,
    timestamp: "2:30 PM"
  }, {
    content: "I need help creating a query to analyze NTB trends.",
    isAI: false,
    timestamp: "2:31 PM"
  }, {
    content: `I'll help you create a query to analyze NTB (New-to-Brand) trends. Here's a SQL query that will show the NTB trends over the past 30 days for both DSP and SA:
`,
    isAI: true,
    timestamp: "2:31 PM"
  }];
  const getBotName = (type: BotType) => {
    const botNames: Record<BotType, string> = {
      audience: "Audience AI Bot",
      sql: "AMC SQL AI Bot",
      dsp: "DSP AI Bot",
      visualization: "AMC Visualization Bot",
      media: "Media Plan AI Bot",
      settings: "Settings",
      profile: "Profile",
      dashboard: "Dashboard"
    };
    return botNames[type];
  };
  const handleTitleSubmit = () => {
    if (tempTitle.trim()) {
      setChatTitle(tempTitle);
    } else {
      setTempTitle(chatTitle);
    }
    setIsEditing(false);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTitleSubmit();
    }
    if (e.key === "Escape") {
      setTempTitle(chatTitle);
      setIsEditing(false);
    }
  };
  const renderContent = () => {
    if (activeBotType === "dashboard") {
      return <DashboardPage />;
    }
    if (activeBotType === "profile") {
      return <ProfilePage />;
    }
    if (activeBotType === "settings") {
      return <SettingsPage />;
    }
    return <>
        <div className="border-b border-gray-200 dark:border-gray-700 p-2 md:p-4 bg-white dark:bg-gray-800">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              {isEditing ? <div className="flex items-center gap-2 flex-1">
                  <input type="text" value={tempTitle} onChange={e => setTempTitle(e.target.value)} onKeyDown={handleKeyPress} autoFocus className="flex-1 text-lg md:text-xl font-semibold bg-transparent border-b-2 border-purple-500 focus:outline-none text-gray-800 dark:text-white px-1" placeholder="Enter chat title..." />
                  <button onClick={handleTitleSubmit} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                    <Check className="w-5 h-5 text-purple-600" />
                  </button>
                </div> : <>
                  <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                    {chatTitle}
                  </h1>
                  <button onClick={() => {
                setIsEditing(true);
                setTempTitle(chatTitle);
              }} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                    <Pencil className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>
                </>}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {getBotName(activeBotType)}
            </p>
          </div>
        </div>
        <QuickPrompts />
        <div className="flex-1 overflow-y-auto p-2 md:p-4">
          {messages.map((message, index) => <ChatMessage key={index} content={message.content} isAI={message.isAI} timestamp={message.timestamp} />)}
        </div>
        {activeBotType === "audience" ? <AudienceChatInput /> : activeBotType === "sql" ? <SQLChatInput /> : activeBotType === "visualization" ? <VisualizationChatInput /> : <ChatInput />}
      </>;
  };
  return <div className="flex w-full h-screen bg-white overflow-hidden">
      <Sidebar activeBotType={activeBotType} onBotChange={setActiveBotType} />
      <div className="flex flex-col flex-1 min-w-0">{renderContent()}</div>
    </div>;
}