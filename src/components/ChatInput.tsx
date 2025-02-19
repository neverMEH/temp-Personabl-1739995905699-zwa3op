import React from "react";
import { Send, Image, Paperclip, ChevronDown } from "lucide-react";
export const ChatInput: React.FC = () => {
  return <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-2 md:p-4">
        <div className="flex items-center gap-2 mb-2">
          <button className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center gap-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
            <span>AI Web</span>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg hidden sm:block">
            <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg hidden sm:block">
            <Image className="w-4 h-4 md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <div className="flex-1 relative">
            <input type="text" placeholder="Ask whatever you want..." className="w-full p-2 pr-16 border border-gray-200 dark:border-gray-700 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500">
              0/1000
            </div>
          </div>
          <button className="p-1.5 md:p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Send className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>;
};