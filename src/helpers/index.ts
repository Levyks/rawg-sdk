export function stringToDate(date: string | undefined): Date | undefined {
  if (!date) return;
  if (date.includes('Z')) return new Date(date);
  if (date.includes('T')) return new Date(date + 'Z');
  return new Date(date + 'T00:00:00');
}
