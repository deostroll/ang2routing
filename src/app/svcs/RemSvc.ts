import {Injectable} from 'angular2/core';

class Reminder {
  title: string;
  id: number;
  notes: string;
  created: Date;
  timestamp: Date;
  isDone: boolean;
}

@Injectable()
export class RemSvc {
  reminders: Array<Reminder> = [];
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
}
