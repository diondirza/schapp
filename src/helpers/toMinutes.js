export default function toMinutes(data) {
  const times = data
    .split(':')
    .map(Number)
    .concat(0);
  const ms = new Date().setHours(...times);
  const initMs = new Date().setHours(9, 0, 0);

  return (ms - initMs) / 1000 / 60;
}
