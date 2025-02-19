import React from "react";
import { RefreshCw, BarChart2, LineChart, PieChart, ScatterChart, Activity } from "lucide-react";
export const QuickPrompts: React.FC = () => {
  const prompts = [{
    icon: BarChart2,
    text: "Create a bar chart showing sales distribution by region"
  }, {
    icon: LineChart,
    text: "Generate a trend line chart for monthly revenue growth"
  }, {
    icon: PieChart,
    text: "Show market share distribution in a pie chart"
  }, {
    icon: ScatterChart,
    text: "Plot correlation between sales and marketing spend"
  }, {
    icon: Activity,
    text: "Visualize daily performance metrics over time"
  }];
  return <div className="p-2 md:p-4">
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-2 md:gap-4 mb-2 md:mb-4 min-w-max">
          {prompts.map((prompt, index) => <button key={index} className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs md:text-sm whitespace-nowrap">
              <prompt.icon className="w-4 h-4 flex-shrink-0 text-purple-600" />
              <span className="truncate">{prompt.text}</span>
            </button>)}
        </div>
      </div>
      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-xs md:text-sm">
        <RefreshCw className="w-4 h-4" />
        Refresh Prompts
      </button>
    </div>;
};