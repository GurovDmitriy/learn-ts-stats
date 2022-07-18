export function dateStringToDate(dateString: string): Date {
  // 20/02/2022
  const dateParts = dateString
    .split("/")
    .map((value: string): number => parseInt(value))

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
