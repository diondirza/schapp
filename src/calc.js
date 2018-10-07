import { toPixels } from './helpers';

export default function calcPosition(data, _, source) {
  if (!data) return {};

  let index = 0;
  let width = 600;
  const maxHeight = 1440;
  const minuteHeight = 2;
  const top = minuteHeight * data.start;
  const intersectingSchedule = source.filter(s => s.start < data.end && s.end > data.start);

  if (intersectingSchedule.length) {
    width = Math.floor(width / intersectingSchedule.length);
    index = intersectingSchedule.findIndex(s => s.id === data.id)
  }

  const left = index * width;
  const height = (data.end - data.start) * minuteHeight;

  return {
    text: `Meeting - ${data.id}`,
    top: toPixels(top),
    left: toPixels(left),
    height: toPixels(height),
    width: toPixels(width),
  };
}
