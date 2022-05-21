export function stringToDate(date: string): Date {
  if (date.includes('Z')) return new Date(date);
  if (date.includes('T')) return new Date(date + 'Z');
  return new Date(date + 'T00:00:00');
}
