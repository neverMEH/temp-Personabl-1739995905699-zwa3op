import React, { useEffect, useState, useRef } from "react";
import { Send, ChevronDown } from "lucide-react";
type QueryType = "Base Queries" | "Paid Queries";
type CategoryType = "Analytics" | "Audience";
export const SQLChatInput: React.FC = () => {
  const [isQueryDropdownOpen, setIsQueryDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<QueryType>("Base Queries");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Analytics");
  const queryDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const queryButtonRef = useRef<HTMLButtonElement>(null);
  const categoryButtonRef = useRef<HTMLButtonElement>(null);
  const queryTypes: QueryType[] = ["Base Queries", "Paid Queries"];
  const categoryTypes: CategoryType[] = ["Analytics", "Audience"];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle Query Type dropdown
      if (queryDropdownRef.current && !queryDropdownRef.current.contains(event.target as Node) && !queryButtonRef.current?.contains(event.target as Node)) {
        setIsQueryDropdownOpen(false);
      }
      // Handle Category dropdown
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node) && !categoryButtonRef.current?.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-2 md:p-4">
        <div className="flex items-center gap-2 mb-2">
          {/* Query Type Dropdown */}
          <div className="relative">
            <button ref={queryButtonRef} onClick={() => {
            setIsQueryDropdownOpen(!isQueryDropdownOpen);
            setIsCategoryDropdownOpen(false);
          }} className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center gap-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <span>{selectedQuery}</span>
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            {isQueryDropdownOpen && <div ref={queryDropdownRef} className="absolute bottom-full left-0 mb-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px]">
                {queryTypes.map(type => <button key={type} onClick={() => {
              setSelectedQuery(type);
              setIsQueryDropdownOpen(false);
            }} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 first:rounded-t-lg last:rounded-b-lg whitespace-nowrap">
                    {type}
                  </button>)}
              </div>}
          </div>
          {/* Category Dropdown */}
          <div className="relative">
            <button ref={categoryButtonRef} onClick={() => {
            setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
            setIsQueryDropdownOpen(false);
          }} className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center gap-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <span>{selectedCategory}</span>
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            {isCategoryDropdownOpen && <div ref={categoryDropdownRef} className="absolute bottom-full left-0 mb-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px]">
                {categoryTypes.map(type => <button key={type} onClick={() => {
              setSelectedCategory(type);
              setIsCategoryDropdownOpen(false);
            }} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 first:rounded-t-lg last:rounded-b-lg whitespace-nowrap">
                    {type}
                  </button>)}
              </div>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input type="text" placeholder="Ask about SQL queries..." className="w-full p-2 pr-16 border border-gray-200 dark:border-gray-700 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
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