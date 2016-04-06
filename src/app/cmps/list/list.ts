import {Component} from 'angular2/core';
import {RemSvc} from './../../svcs/RemSvc';
import {NavSvc, NavigationComponent} from './../../svcs/NavSvc';
import {RouterLink, Router} from 'angular2/router';
import {StrikedText} from './../stext/stext';

@Component({
  selector: 'rem-input',
  templateUrl: 'app/cmps/list/entry.html',
  directives: [RouterLink]
})
export class ReminderInput {
  title: string = '';
  note: string = '';

  constructor(private svc: RemSvc, private router: Router, private nav: NavSvc) {
    console.log('ReminderInput');
    // console.log(router);
  }

  addReminder() {
    this.svc.add(this.title, this.note);
    this.router.navigate(['Home']);
    // console.log(this.title, this.note);
  }

  // routerOnActivate() {
  //   console.log('ReminderInput OnActivate');
  //   this.nav.navChange.emit('input');
  // }
};

@Component({
  templateUrl: 'app/cmps/list/list.html',
  directives: [RouterLink, StrikedText]
})
// export class List implements OnActivate {
export class List extends NavigationComponent {
  reminders: Array<any> = []; // TODO: change type

  constructor(private svc: RemSvc, nav: NavSvc){
    super(nav, "home");
    console.log('List');
    this.reminders = svc.reminders;
  }

  markItemDone(item: any, done: boolean) {
    this.svc.markItemDone(done, item);
  }

}
