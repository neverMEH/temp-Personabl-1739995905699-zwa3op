import React from "react";
import { Users, Database, Brain, BarChart2, Presentation, Clock, Zap, MessageSquare } from "lucide-react";
interface BotCard {
  icon: React.ElementType;
  title: string;
  description: string;
  type: string;
}
export const DashboardPage: React.FC = () => {
  const botCards: BotCard[] = [{
    icon: Users,
    title: "Audience AI Bot",
    description: "Analyze and understand your audience segments",
    type: "audience"
  }, {
    icon: Database,
    title: "AMC SQL AI Bot",
    description: "Generate and optimize SQL queries",
    type: "sql"
  }, {
    icon: BarChart2,
    title: "AMC Visualization Bot",
    description: "Create compelling data visualizations",
    type: "visualization"
  }];
  const recentConversations = [{
    title: "Campaign Analysis",
    time: "2 hours ago",
    preview: "Analysis of Q4 campaign performance..."
  }, {
    title: "SQL Query Optimization",
    time: "Yesterday",
    preview: "Improving database query efficiency..."
  }, {
    title: "Audience Segmentation",
    time: "2 days ago",
    preview: "Creating targeted audience segments..."
  }];
  return <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Select an AI assistant to get started or continue a recent
            conversation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {botCards.map((bot, index) => <button key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-left group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                  <bot.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {bot.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {bot.description}
                  </p>
                </div>
              </div>
            </button>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Quick Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{
              icon: MessageSquare,
              label: "Total Chats",
              value: "1,234"
            }, {
              icon: Clock,
              label: "Active Time",
              value: "45.2 hrs"
            }, {
              icon: Zap,
              label: "AI Actions",
              value: "8,392"
            }].map((stat, index) => <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Recent Conversations
            </h2>
            <div className="space-y-3">
              {recentConversations.map((conv, index) => <button key={index} className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {conv.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {conv.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {conv.preview}
                  </p>
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};