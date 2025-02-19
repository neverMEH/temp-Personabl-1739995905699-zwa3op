import React, { useState } from "react";
import { Database, Trash2, MessageSquare } from "lucide-react";
import { ChatHistoryModal } from "../modals/ChatHistoryModal";
export const SettingsPage: React.FC = () => {
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  return <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-8">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Settings</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Manage your preferences and application settings
          </p>
        </div>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Data & Storage</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left">
                <Database className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <div className="font-medium">Storage Usage</div>
                  <div className="text-sm text-gray-600">
                    2.5 GB of 5 GB used
                  </div>
                </div>
              </button>
              <button onClick={() => setIsChatHistoryOpen(true)} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left">
                <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <div className="font-medium">Chat History</div>
                  <div className="text-sm text-gray-600">30 days retention</div>
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-medium text-red-600">Clear Data</div>
                  <div className="text-sm text-gray-600">
                    Clear all local data and history
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50">
                Clear
              </button>
            </div>
          </div>
        </section>
      </div>
      <ChatHistoryModal isOpen={isChatHistoryOpen} onClose={() => setIsChatHistoryOpen(false)} />
    </div>;
};