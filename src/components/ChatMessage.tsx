import React, { createElement } from "react";
import { Copy, Download, Code } from "lucide-react";
type MessageProps = {
  content: string;
  isAI: boolean;
  timestamp: string;
  isSQLBot?: boolean;
};
export const ChatMessage: React.FC<MessageProps> = ({
  content,
  isAI,
  timestamp,
  isSQLBot = false
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };
  const handleDownload = () => {
    const blob = new Blob([content], {
      type: "text/plain"
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-response-${timestamp.replace(/\s/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };
  const handleCopySQL = (sql: string) => {
    navigator.clipboard.writeText(sql);
  };
  const renderSQLContent = () => {
    if (!isSQLBot || !isAI) return <div className="whitespace-pre-wrap break-words">{content}</div>;
    const parts = content.split(/(```sql[\s\S]*?```)/g);
    return <div className="space-y-4">
        {parts.map((part, index) => {
        if (part.startsWith("```sql")) {
          const sql = part.replace(/```sql\n?/, "").replace(/```$/, "");
          return <div key={index} className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900">
                  <span className="text-sm text-gray-200">SQL Query</span>
                  <button onClick={() => handleCopySQL(sql)} className="p-1 hover:bg-gray-700 rounded transition-colors" title="Copy SQL">
                    <Code className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                  </button>
                </div>
                <div className="p-4 text-sm font-mono text-gray-200 overflow-x-auto">
                  {sql}
                </div>
              </div>;
        }
        return <div key={index} className="whitespace-pre-wrap break-words">
              {part}
            </div>;
      })}
      </div>;
  };
  return <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-6`}>
      {isAI && <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
          <span className="text-xs md:text-sm font-medium text-purple-600">
            AI
          </span>
        </div>}
      <div className="flex flex-col max-w-[85%] md:max-w-[75%] group">
        <div className={`rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base ${isAI ? "bg-gray-100 dark:bg-gray-800" : "bg-purple-600 text-white"}`}>
          {renderSQLContent()}
          {isAI && <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={handleCopy} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors" title="Copy to clipboard">
                <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
              <button onClick={handleDownload} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors" title="Download response">
                <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">
          {timestamp}
        </span>
      </div>
      {!isAI && <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
          <span className="text-xs md:text-sm font-medium text-gray-600">
            You
          </span>
        </div>}
    </div>;
};