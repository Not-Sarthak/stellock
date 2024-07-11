import { ClipboardCheckIcon, DownloadIcon } from "lucide-react";
import React from "react";

export const Export: React.FC = () => {
  return (
    <div className="relative w-80 rounded-lg p-[1px] cursor-pointer">
      <div className="animate-gradient absolute inset-0 rounded-lg bg-white/60"></div>
      <div className="relative z-10 rounded-lg bg-[#232325] p-4 font-normal text-white shadow-md transition-shadow duration-200 hover:shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <h2 className="flex items-center gap-2 font-cal text-sm">
              <DownloadIcon />
              Export this configuration
            </h2>
            <p className="text-sm text-white/60 mt-3">
              Stellock's components can be customized client-side, so you can
              easily reuse this theme in your application.
            </p>
          </div>
        </div>
        <button className="mt-4 flex items-center space-x-1 rounded-lg border-[1px] border-white/50 p-1 text-sm hover:bg-[#000000]/40">
          <span>Copy to Clipboard</span>
          <span>
            <ClipboardCheckIcon className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};
