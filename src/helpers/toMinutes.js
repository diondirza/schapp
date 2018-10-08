export default function toMinutes(data) {
  const [hours, minutes] = data.split(':').map(Number);
  const ms = new Date().setHours(hours, minutes, 0);
  const initMs = new Date().setHours(9, 0, 0);

  return (ms - initMs) / 1000 / 60;
}
