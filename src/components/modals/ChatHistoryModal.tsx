import React, { useState } from "react";
import { X, Search, MessageSquare, Trash2, Calendar, ChevronRight } from "lucide-react";
interface ChatHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ChatHistoryModal: React.FC<ChatHistoryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  if (!isOpen) return null;
  const chatHistory = [{
    date: "Today",
    conversations: [{
      title: "Project Documentation Help",
      preview: "I need help with my project documentation...",
      time: "2:30 PM",
      messages: 6
    }, {
      title: "API Integration Questions",
      preview: "How do I integrate the new API endpoints...",
      time: "11:45 AM",
      messages: 4
    }]
  }, {
    date: "Yesterday",
    conversations: [{
      title: "Database Schema Design",
      preview: "I'm working on designing a new database schema...",
      time: "3:20 PM",
      messages: 8
    }, {
      title: "Code Review Discussion",
      preview: "Can you help me review this code...",
      time: "10:15 AM",
      messages: 5
    }]
  }, {
    date: "Last Week",
    conversations: [{
      title: "Testing Strategy",
      preview: "What's the best approach for testing...",
      time: "Mon 2:00 PM",
      messages: 12
    }]
  }];
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-4 h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chat History
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                View and manage your past conversations
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search conversations..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {chatHistory.map((group, groupIndex) => <div key={groupIndex}>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {group.date}
                </h3>
              </div>
              <div className="space-y-2">
                {group.conversations.map((chat, chatIndex) => <div key={chatIndex} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <MessageSquare className="w-4 h-4 text-gray-400" />
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {chat.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {chat.preview}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{chat.time}</span>
                          <span>•</span>
                          <span>{chat.messages} messages</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};