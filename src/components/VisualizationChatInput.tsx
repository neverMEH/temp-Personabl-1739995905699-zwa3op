import React from "react";
import { Send, Upload } from "lucide-react";
export const VisualizationChatInput: React.FC = () => {
  return <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-2 md:p-4">
        <div className="flex flex-col gap-4">
          {/* CSV Upload Area */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
            <input type="file" accept=".csv" className="hidden" id="csv-upload" />
            <label htmlFor="csv-upload" className="flex flex-col items-center cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Upload CSV file to visualize
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Drag and drop or click to select
              </span>
            </label>
          </div>
          {/* Chat Input */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input type="text" placeholder="Describe the visualization you want to create..." className="w-full p-2 pr-16 border border-gray-200 dark:border-gray-700 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500">
                0/1000
              </div>
            </div>
            <button className="p-1.5 md:p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};