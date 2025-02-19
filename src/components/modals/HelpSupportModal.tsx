import React, { useState } from "react";
import { X, ExternalLink, Mail, MessageCircle, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FAQItem {
  question: string;
  answer: string;
}
export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({
  isOpen,
  onClose
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  if (!isOpen) return null;
  const faqItems: FAQItem[] = [{
    question: "How do I get started with the AI assistant?",
    answer: "Simply type your question in the chat input and our AI will respond. You can also use the quick prompts above the chat for common queries."
  }, {
    question: "Can I save my conversations?",
    answer: "Yes! All your conversations are automatically saved and can be accessed from the chat history section in settings."
  }, {
    question: "How do I switch between different AI bots?",
    answer: "Use the sidebar icons to switch between different specialized AI bots, each designed for specific tasks like SQL queries or data visualization."
  }, {
    question: "Is my data secure?",
    answer: "We take security seriously. All conversations are encrypted, and you can manage your data retention settings in the Settings page."
  }, {
    question: "How can I customize my notification preferences?",
    answer: "Go to your Profile page and click on either 'Email Preferences' or 'Notifications' to customize how you receive updates."
  }];
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-4 h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Help & Support
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get help and find answers to common questions
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://forum.example.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <MessageCircle className="w-5 h-5 text-purple-500" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  Community Forum
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Join discussions and get help
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a href="mailto:support@example.com" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <Mail className="w-5 h-5 text-purple-500" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  Email Support
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Get direct assistance
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
          {/* FAQ Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="space-y-3">
              {faqItems.map((item, index) => <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    {expandedIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedIndex === index && <div className="p-4 pt-0 text-sm text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};