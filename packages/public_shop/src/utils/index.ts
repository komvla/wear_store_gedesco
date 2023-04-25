export function truncate(str: string, maxlength: number): string {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}
