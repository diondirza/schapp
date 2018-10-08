import render from './render';
import addMeeting from './addMeeting';
import { scheduleData } from './mock';


function initEvents() {
  document.querySelector('button').addEventListener('click', addMeeting);
}

initEvents();
render(scheduleData);

