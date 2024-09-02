'use client'
import Image from "next/image";
import {Switch} from "@/components/ui/switch";

export default function Header() {
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between px-2">
      <Image src="/logos/logo.png" alt="Logo der Fachschaft" width="200" height="60" />
      <span className={'mr-5'}>
        <Switch defaultChecked={true} onCheckedChange={() => alert('Darkmode will be added in next update!')}/>
      </span>
    </div>
  );
}
