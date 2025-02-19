import React from "react";
import { X, Bell, Smartphone, Volume2, Vibrate, MessageSquare, Bot, BoxIcon } from "lucide-react";
interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  const notifications = [{
    icon: MessageSquare,
    title: "Chat Messages",
    description: "Get notified when you receive new chat messages"
  }, {
    icon: Bot,
    title: "AI Assistant Updates",
    description: "Notifications about AI assistant status and responses"
  }, {
    icon: BoxIcon,
    title: "Desktop Notifications",
    description: "Show notifications on your desktop"
  }, {
    icon: Smartphone,
    title: "Mobile Notifications",
    description: "Receive notifications on your mobile device"
  }, {
    icon: Volume2,
    title: "Sound",
    description: "Play a sound for new notifications"
  }, {
    icon: Vibrate,
    title: "Vibration",
    description: "Vibrate on new notifications"
  }];
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notification Settings
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customize how you receive notifications
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Notification Status */}
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-purple-500" />
              <div>
                <div className="font-medium text-purple-900 dark:text-purple-100">
                  Notifications are enabled
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  You'll receive notifications based on your preferences below
                </div>
              </div>
            </div>
          </div>
          {/* Notification Settings */}
          {notifications.map((notification, index) => <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="text-gray-500 dark:text-gray-400">
                  <notification.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {notification.description}
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>)}
        </div>
        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>;
};