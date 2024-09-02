import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import wave from "@/images/logo.svg";
import user from "@/images/user-circle.svg";

export function Header() {
  return (
    <header className="border-b border-neutral-slate px-4 py-3 md:px-20">
      <div className="container mx-auto flex items-center justify-between">
        <Image src={wave} alt="wave" width={110} className="cursor-pointer" />
        <Avatar className="h-[30px] w-[30px] cursor-pointer">
          <Image src={user} alt="not found" width={30} height={30} />
        </Avatar>
      </div>
    </header>
  );
}
