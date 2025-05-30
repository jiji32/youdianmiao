import dayjs from "dayjs";
export function formatMonthDay(date) {
  return dayjs(date).format('MM月DD日')
}
export function getDiffDuration(startDate, endDate) {
  return dayjs(endDate).diff(dayjs(startDate), 'day') 
}