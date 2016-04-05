import {Injectable} from 'angular2/core';

@Injectable()
export class RemSvc {
  reminders: Array<Object> = [];
  constructor() {

  }
  add(title: string, note:string){
    var id = this._newId();
    var reminder = {};
    reminder.id = id;
    reminder.title = title;
    reminder.notes = note;
    reminder.created = reminder.timestamp = new Date();
    reminder.isDone = false;
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
      idx = Math.floor(Math.Random()* 15+ 1);
    } while(exists(idx));    

    return idx;
  }
}
