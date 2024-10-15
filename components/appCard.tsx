'use client'
import {connectStyles} from "@/lib/utils/stylingConnector";
import ThemedImage from "@/components/themedImage";
import Link from "next/link";

export default function AppCard({src, alt, title, href}: {src: string, alt:string, title: string, href:string}) {
  const baseStyling: string = 'w-48 h-48 rounded-[0.4rem] border-2 border-gray-500';
  const hoverStyling: string = 'hover:border-2 hover:border-red-500';

  return (
    <Link
      href={href}
      className={connectStyles(baseStyling, hoverStyling)}
    >
      <div className={'p-5 w-full h-full flex flex-col items-center justify-between '}>
        <ThemedImage srcLight={src} alt={alt}/>
        <span className={'text-lg w-full h-fit text-center'}>{title}</span>
      </div>
    </Link>
  );
}