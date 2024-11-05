'use client'
import {connectStyles} from "@/lib/utils/stylingConnector";
import ThemedImage from "@/components/themedImage";
import Link from "next/link";

export default function AppCard({src, alt, title, href}: {src: string, alt:string, title: string, href:string}) {
  const baseStyling: string = 'w-40 h-40 min-[750px]:w-48 min-[750px]:h-48 rounded-[0.4rem] border-2 border-gray-500';
  const hoverStyling: string = 'hover:border-2 hover:border-red-500';

  return (
    <Link
      href={href}
      className={connectStyles(baseStyling, hoverStyling)}
    >
      <div className={'p-4 min-[750px]:p-5 w-full h-full flex flex-col items-center justify-between '}>
        <ThemedImage srcLight={src} alt={alt}/>
        <span className={'min-[750px]:text-lg w-full h-fit text-center'}>{title}</span>
      </div>
    </Link>
  );
}