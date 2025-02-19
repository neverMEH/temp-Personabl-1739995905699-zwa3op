import React, { useState } from "react";
import { Mail, Bell, HelpCircle, LogOut } from "lucide-react";
import { EmailPreferencesModal } from "../modals/EmailPreferencesModal";
import { NotificationsModal } from "../modals/NotificationsModal";
import { HelpSupportModal } from "../modals/HelpSupportModal";
export const ProfilePage: React.FC = () => {
  const [isEmailPreferencesOpen, setIsEmailPreferencesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isHelpSupportOpen, setIsHelpSupportOpen] = useState(false);
  const accountSettings = [{
    icon: Mail,
    label: "Email Preferences",
    desc: "Manage your email notifications",
    onClick: () => setIsEmailPreferencesOpen(true)
  }, {
    icon: Bell,
    label: "Notifications",
    desc: "Customize your notifications",
    onClick: () => setIsNotificationsOpen(true)
  }];
  return <div className="flex-1 overflow-y-auto dark:bg-gray-900">
      <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-xl md:text-2xl text-purple-600">JD</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold dark:text-white">
              John Doe
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              john.doe@example.com
            </p>
          </div>
        </div>
        {/* Account Settings */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold dark:text-white">
            Account Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accountSettings.map((item, index) => <button key={index} onClick={item.onClick} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
                <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <div className="font-medium dark:text-white">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </div>
                </div>
              </button>)}
          </div>
        </div>
        {/* Usage Statistics */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold dark:text-white">
            Usage Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{
            label: "Messages Sent",
            value: "1,234"
          }, {
            label: "API Calls",
            value: "5,678"
          }, {
            label: "Active Days",
            value: "45"
          }].map((stat, index) => <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
                <div className="text-xl font-semibold mt-1 dark:text-white">
                  {stat.value}
                </div>
              </div>)}
          </div>
        </div>
        {/* Additional Options */}
        <div className="space-y-3">
          {[{
          icon: HelpCircle,
          label: "Help & Support",
          desc: "Get help or contact support",
          onClick: () => setIsHelpSupportOpen(true)
        }, {
          icon: LogOut,
          label: "Sign Out",
          desc: "Sign out of your account"
        }].map((item, index) => <button key={index} onClick={item.onClick} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
              <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium dark:text-white">{item.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </div>
              </div>
            </button>)}
        </div>
      </div>
      {/* Modals */}
      <EmailPreferencesModal isOpen={isEmailPreferencesOpen} onClose={() => setIsEmailPreferencesOpen(false)} />
      <NotificationsModal isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
      <HelpSupportModal isOpen={isHelpSupportOpen} onClose={() => setIsHelpSupportOpen(false)} />
    </div>;
};