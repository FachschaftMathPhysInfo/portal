'use client'
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Switch} from "./ui/switch"
import {resolve} from "dns";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? 'light' : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch
      onCheckedChange={() => {
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
      checked={typeof currentTheme === "undefined" ? false : currentTheme === 'dark'}
    />
  )
}

export default ThemeSwitch