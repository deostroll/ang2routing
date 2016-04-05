import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';
import {NavSvc} from './../../svcs/NavSvc';
import {RemSvc} from './../../svcs/RemSvc';

@Component({
  templateUrl:  'app/cmps/profile/profile.html'
})
export class Profile implements OnActivate {
  pending: number;
  total: number;
  completed: number;

  constructor(private nav: NavSvc, rem: RemSvc) {
    this.pending = rem.reminders.filter( x => !x.isDone).length;
    this.total = rem.reminders.length
    this.completed = this.total - this.pending;    
  }
  routerOnActivate(n: ComponentInstruction, p: ComponentInstruction) {
    console.log('Profile OnActivate');
    setTimeout(() => this.nav.navChange.emit('profile'), 100);
  }
}
