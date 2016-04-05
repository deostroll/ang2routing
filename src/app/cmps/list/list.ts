import {Component} from 'angular2/core';

@Component({
  templateUrl: 'app/cmps/list/list.html'
})
export class List {
  reminders: Array<any> = []; // TODO: change type
  constructor(){
    console.log('List');
  }
}
