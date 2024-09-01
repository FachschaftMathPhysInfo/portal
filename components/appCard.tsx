'use client'
import Image from "next/image";
import {connectStyles} from "@/lib/utils/stylingConnector";

export default function AppCard({src, alt, title, href}: {src: string, alt:string, title: string, href:string}) {
  const baseStyling: string = 'w-48 h-48 rounded-md border-2 border-gray-500';
  const hoverStyling: string = 'hover:border-2 hover:border-red-500';

  return (
    <button
      onClick={() => window.open(href, '_self')}
      className={connectStyles(baseStyling, hoverStyling)}
    >
      <div className={'p-5 w-full h-full flex flex-col items-center justify-between '}>
        <Image src={src} alt={alt} width={200} height={50}/>
        <span className={'text-lg w-full h-fit'}>{title}</span>
      </div>
    </button>
  );
}