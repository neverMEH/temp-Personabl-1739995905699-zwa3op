import React, { useState } from "react";
import { Moon, Database, Trash2, MessageSquare } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { ChatHistoryModal } from "../modals/ChatHistoryModal";
export const SettingsPage: React.FC = () => {
  const {
    darkMode,
    toggleDarkMode
  } = useDarkMode();
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  return <div className="flex-1 overflow-y-auto dark:bg-gray-900">
      <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-8">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold dark:text-white">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Manage your preferences and application settings
          </p>
        </div>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium dark:text-white">Dark Mode</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Toggle dark mode on or off
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">
            Data & Storage
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
                <Database className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <div className="font-medium dark:text-white">
                    Storage Usage
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    2.5 GB of 5 GB used
                  </div>
                </div>
              </button>
              <button onClick={() => setIsChatHistoryOpen(true)} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
                <MessageSquare className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <div className="font-medium dark:text-white">
                    Chat History
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    30 days retention
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-medium text-red-600">Clear Data</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Clear all local data and history
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10">
                Clear
              </button>
            </div>
          </div>
        </section>
      </div>
      <ChatHistoryModal isOpen={isChatHistoryOpen} onClose={() => setIsChatHistoryOpen(false)} />
    </div>;
};