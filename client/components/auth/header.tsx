import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/black-logo.svg";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
}

export const Header = ({
    label,
}: HeaderProps) => {
    return (
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" width={30} height={30} />
          <h1 className={cn("text-3xl font-semibold", font.className)}>
            {" "}
            Stellock
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    );
}