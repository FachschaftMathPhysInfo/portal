import Image from "next/image";
import { useTheme } from "next-themes";
import changeThemedSrc from "@/lib/utils/themeSrcChanger";
import { useEffect, useState } from "react";

export default function ThemedImage({srcLight, alt} : {srcLight: string, alt: string}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme === 'system' ? 'light' : resolvedTheme;
  let src;

  switch (currentTheme) {
    case 'light':
      src = srcLight;
      break;
    case 'dark':
      src = changeThemedSrc(srcLight);
      break;
    default:
      src = '/';
      break;
  }

  return (
    <Image
      alt={alt}
      src={src}
      width={100}
      height={100}
    />
  );
}
