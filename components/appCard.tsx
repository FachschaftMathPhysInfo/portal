'use client'
import Image from "next/image";

export default function AppCard({src, alt, title, href}: {src: string, alt:string, title: string, href:string}) {
  const baseStyling: string = 'w-48 h-48 rounded-md border border-gray-500 ';
  const hoverStyling: string = 'hover:border-2 hover:border-red-500 hover:w-[calc(12rem-1px)] hover:w-[calc(12rem-1px)] ';

  return (
    <button
      onClick={() => window.open(href, '_self')}
      className={baseStyling + hoverStyling}
    >
      <div className={'p-5 w-full h-full flex flex-col items-center justify-between '}>
        <Image src={src} alt={alt} width={150} height={150} className={'mt-5'}/>
        <span className={'text-lg w-full h-fit'}>{title}</span>
      </div>
    </button>
  );
}