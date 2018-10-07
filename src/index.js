import render from './render';
import addMeeting from './addMeeting';

const scheduleData = [
  {
    id: 'New',
    start: 60,
    end: 120,
  },
  {
    id: 'New 1',
    start: 150,
    end: 270,
  },
  {
    id: 'New 2',
    start: 240,
    end: 300,
  },
  {
    id: 'New 3',
    start: 200,
    end: 360,
  },
  {
    id: 'New 4',
    start: 180,
    end: 330,
  },
];

function initEvents() {
  document.querySelector('button').addEventListener('click', addMeeting);
}

initEvents();
render(scheduleData);

