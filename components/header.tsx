'use client'
import Image from "next/image";
import ThemeSwitch from "@/components/themeSwitch";

export default function Header() {
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between px-2">
      <Image
        className="ml-4 hidden dark:block"
        src={'/icons_dark/banner.png'}
        alt="dark-mode fachschafts logo"
        width={200}
        height={60}
      />
      <Image
        className="dark:hidden"
        src={'/icons_light/banner.png'}
        alt="light-mode fachschafts logo"
        width={200}
        height={60}
      />
      <span className={'mr-5'}>
        <ThemeSwitch/>
      </span>
    </div>
  );
}
