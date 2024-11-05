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
    <img
      className={'w-20 h-20 min-[750px]:w-32 min-[750px]:h-32'}
      alt={alt}
      src={src}
    />
  );
}
