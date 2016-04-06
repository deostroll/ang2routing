import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';
import {NavSvc, NavigationComponent} from './../../svcs/NavSvc';
import {RemSvc} from './../../svcs/RemSvc';

@Component({
  templateUrl:  'app/cmps/profile/profile.html'
})
export class Profile extends NavigationComponent {
  pending: number;
  total: number;
  completed: number;

  constructor(nav: NavSvc, rem: RemSvc) {
    super(nav, "profile");
    this.pending = rem.reminders.filter( x => !x.isDone).length;
    this.total = rem.reminders.length
    this.completed = this.total - this.pending;
  }  
}
