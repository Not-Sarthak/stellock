import { PinRightIcon } from "@radix-ui/react-icons";
import { BoxIcon } from "lucide-react";
import React from "react";

export const Explore: React.FC = () => {
  return (
    <div className="relative w-80 rounded-lg p-1 cursor-pointer">
      <div className="animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[length:200%_200%]"></div>
      <div className="relative z-10 rounded-lg bg-[#232325] p-4 font-normal text-white shadow-md transition-shadow duration-200 hover:shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <h2 className="flex items-center gap-2 font-cal text-sm">
              <BoxIcon />
              Explore Stellock
            </h2>
            <p className="text-sm text-white/60">
              The easiest way to onboard all of your users to web3
            </p>
          </div>
        </div>
        <p className="mt-2 text-sm text-white/60">
          Sign in to the demo to access the dev tools.
        </p>
        <button className="mt-4 flex items-center space-x-1 rounded-lg border-[1px] border-white/50 p-1 text-sm hover:bg-[#000000]/40">
          <span>Explore the Docs</span>
          <span>
            <PinRightIcon className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
};
