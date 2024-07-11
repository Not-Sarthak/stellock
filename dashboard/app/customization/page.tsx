"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import ColorPicker from "@/components/color-picker";
import { Explore } from "@/components/customization-cards/explore";
import { Export } from "@/components/customization-cards/export";
import { Whitelabel } from "@/components/customization-cards/whitelabel";
import Image from "next/image";
import logo from "@/public/logo.svg"

export default function Overview() {
  const [selectedColors, setSelectedColors] = useState<{
    background: string;
    accent: string;
  }>({
    background: "",
    accent: "",
  });

  const handleColorSelect = (background: string, accent: string) => {
    setSelectedColors({ background, accent });
  };
  return (
    <div className="flex h-screen max-w-screen-2xl flex-col space-y-12 p-8 text-white">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Customization
        </h1>
      </div>
      <div className="flex h-[90vh] w-full justify-between rounded-3xl border-[2px] border-[#636365]">
        <div className="w-3/4 border-r-[2px] border-[#636365] font-cal font-bold dark:text-white">
          <div className="z-10 h-full w-full rounded-l-3xl bg-black bg-[radial-gradient(#646368_1px,transparent_1px)] [background-size:24px_24px]">
            <div className="flex w-full justify-center gap-8 pt-20">
              <div className="w-[20vw] flex flex-col gap-8 cursor-pointer rounded-lg border-[1px] border-[#636365] bg-[#232325] p-4">
                <div className="flex justify-center">Log in or sign up</div>
                <div className="flex justify-center items-center gap-4">
                  <Image src={logo} alt="logo" width={80} height={80} />
                  <div className="text-4xl">Stellock</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <Explore />
                <Export />
                <Whitelabel />
              </div>
            </div>
          </div>
        </div>
        <div className="text-md flex w-1/4 flex-col rounded-3xl p-4 font-cal font-bold dark:text-white">
          <div className="flex items-center gap-2 border-b-[1px] border-[#636365] pb-2">
            <Sparkles />
            <div>Customize</div>
          </div>
          <div className="mt-4 flex w-full items-center gap-20">
            <ColorPicker onColorSelect={handleColorSelect} />
          </div>
          <div className="mt-16 flex items-center gap-2 border-b-[1px] border-[#636365] pb-2">
            <Sparkles />
            <div>Authentication</div>
          </div>
        </div>
      </div>
    </div>
  );
}
