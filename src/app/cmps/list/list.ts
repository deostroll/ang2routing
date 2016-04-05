import {Component} from 'angular2/core';
import {RemSvc} from './../../svcs/RemSvc';
import {NavSvc} from './../../svcs/NavSvc';
import {RouterLink, Router, OnActivate} from 'angular2/router';

@Component({
  selector: 'rem-input',
  templateUrl: 'app/cmps/list/entry.html',
  directives: [RouterLink]
})
export class ReminderInput implements OnActivate{

  constructor(private svc: RemSvc, private router: Router, private nav: NavSvc) {
    console.log('ReminderInput');
    // console.log(router);
  }

  addReminder(title: string, note: string) {
    this.svc.add(title, note);
    this.router.navigate(['Home']);
  }

  routerOnActivate() {
    console.log('ReminderInput OnActivate');
    this.nav.navChange.emit('input');
  }
};

@Component({
  templateUrl: 'app/cmps/list/list.html',
  directives: [RouterLink]
})
export class List implements OnActivate {
  reminders: Array<any> = []; // TODO: change type
  constructor(svc: RemSvc, private nav: NavSvc){
    console.log('List');
    this.reminders = svc.reminders;
  }

  routerOnActivate() {
    console.log('List OnActivate');
    this.nav.navChange.emit('home');
  }
}
