import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between px-5">
      <Image src="/logos/logo.png" alt="Logo der Fachschaft" width="200" height="60" />
      <span> Testo E </span>
    </div>
  );
}
