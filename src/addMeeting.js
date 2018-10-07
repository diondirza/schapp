import render from './render';
import { toMinutes } from './helpers';

// this function will accept multiple arguments
export default function addMeeting(...args) {
  let opts = {
    multiple: false // detect whether user submit a single meeting or multiple
  };

  if (Array.isArray(args)) {
    const [ options, ...params ] = args; // get first arguments assuming it is an options object, collect the rest arguments as params
    opts = {
      ...opts,
      ...options,
    };
  }

  if (opts.multiple) {
    // TO-DO: implement support for multiple meeting submission
  } else {
    const title = document.querySelector('input[name=title]').value;
    const start = document.querySelector('input[name=start]').value;
    const end = document.querySelector('input[name=end]').value;

    scheduleData.push({
      id: title,
      start: toMinutes(start),
      end: toMinutes(end),
    });
  }

  render(scheduleData);
}
