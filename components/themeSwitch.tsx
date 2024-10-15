'use client'
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? 'dark' : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      id={'theme-switch'}
      className={'p-1 bg-transparent rounded-3xl'}
      onClick={() => {
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
    >
      <Image
        src={currentTheme === 'dark' ? '/icons_light/theme_toggle.svg' : '/icons_dark/theme_toggle.svg'}
        alt={''}
        width={currentTheme === 'dark' ? 40 : 35}
        height={currentTheme === 'dark' ? 40 : 35}/>
    </button>
  )
}

export default ThemeSwitch
