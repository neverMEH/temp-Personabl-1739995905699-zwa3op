import React from "react";
import { Sparkles } from "lucide-react";
interface LogoProps {
  onClick: () => void;
}
export const Logo: React.FC<LogoProps> = ({
  onClick
}) => {
  return <button onClick={onClick} className="flex items-center justify-center p-2 mb-6 hover:opacity-80 transition-opacity">
      <div className="relative">
        <Sparkles className="w-8 h-8 text-purple-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-600 rounded-full border-2 border-white" />
      </div>
    </button>;
};