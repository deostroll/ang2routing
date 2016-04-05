import {Component} from 'angular2/core';
import {RemSvc} from '../../../svcs/RemSvc';

@Component({
  selector: 'rem-input',
  templateUrl: 'app/cmps/list/entry.html'
})
export class ReminderInput {

  constructor(private svc: RemSvc) {

  }

  addReminder(title: string, note: string) {
    this.svc.add(title, note);
  }
}

@Component({
  templateUrl: 'app/cmps/list/list.html'
})
export class List {
  reminders: Array<any> = []; // TODO: change type
  constructor(){
    console.log('List');
  }
}
