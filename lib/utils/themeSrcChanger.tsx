export default function changeThemedSrc(src: string) {
  if(src.includes('icons_dark')) {
    return src.replace('icons_dark', 'icons_light');
  } else {
    return src.replace('icons_light', 'icons_dark');
  }
}