import { PinRightIcon } from "@radix-ui/react-icons";
import { Paintbrush2Icon } from "lucide-react";
import React from "react";

export const Whitelabel: React.FC = () => {
  return (
    <div className="relative w-80 rounded-lg p-[1px] cursor-pointer">
      <div className="animate-gradient absolute inset-0 rounded-lg bg-white/60"></div>
      <div className="relative z-10 rounded-lg bg-[#232325] p-4 font-normal text-white shadow-md transition-shadow duration-200 hover:shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <h2 className="flex items-center gap-2 font-cal text-sm">
              <Paintbrush2Icon />
              Whitelabel Stellock
            </h2>
            <p className="mt-3 text-sm text-white/60">
              This demo uses Privy's out-of-the-box UIs. Privy also supports
              full whitelabel.
            </p>
          </div>
        </div>
        <button className="mt-4 flex items-center space-x-1 rounded-lg border-[1px] border-white/50 p-1 text-sm hover:bg-[#000000]/40">
          <span>Talk to sales</span>
          <span>
            <PinRightIcon className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
};
