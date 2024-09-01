export function connectStyles(...styles: string[]) {
  let base: string = '';

  styles.forEach((value) => {
    base += value + ' ';
  })

  return base
}