function combineStrings(str1: string | undefined, str2: string | undefined): string {
  return (str1 ?? '') + (str2 ?? '');
}