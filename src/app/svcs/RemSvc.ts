import {Injectable} from 'angular2/core';

class Reminder {
  title: string;
  id: number;
  notes: string;
  created: Date;
  timestamp: Date;
  isDone: boolean;

  set(done: boolean) {
    this.isDone = done;
    this.timestamp = new Date();
  }
}

@Injectable()
export class RemSvc {
  reminders: Array<Reminder> = [];
  messages: Array<string> = [];

  constructor() {

  }
  add(title: string, note:string){
    var id = this._newId();
    var reminder = new Reminder();
    reminder.id = id;
    reminder.title = title;
    reminder.notes = note;
    reminder.created = reminder.timestamp = new Date();
    reminder.isDone = false;
    //reminder
    this._addMessage('added reminder with id: ' + reminder.id);
    return this.reminders.push(reminder);
  }

  _newId() {
    var idx = -1;
    // var count = 0;
    var reminders = this.reminders;
    var exists = (id) => reminders.some((r) => r.id === id);
    if(reminders.length === 15) {
      throw new Error('You\'ve reached max limit');
    }

    do {
      idx = Math.floor(Math.random()* 15+ 1);
    } while(exists(idx));

    return idx;
  }

  _addMessage(msg: string) {
    var dt = getTimeString(new Date());
    this.messages.push(dt + ' : ' + msg);
  }

  markItemDone(done: boolean, reminder: Reminder) {
    reminder.isDone = done;
    this._addMessage('updated reminder ' + reminder.id + ' with done: '+ done)
  }
}

function getTimeString(dt: Date) {
  var pad = function(n: number) {
    if(n < 10) return '0' + n;
    return '' + n;
  };

  var y = dt.getFullYear(),
    m = pad(dt.getMonth() + 1),
    d = pad(dt.getDate()),
    h = pad(dt.getHours()),
    m = pad(dt.getMinutes()),
    s = pad(dt.getSeconds());

  return `${y}${m}${d} - ${h}:${m}:${s}`;
}
