import {Component} from 'angular2/core';
import {OnActivate} from 'angular2/router';
import {NavSvc} from './../../svcs/NavSvc';
import {RemSvc} from './../../svcs/RemSvc';

@Component({
  template: `
    <ul>
      <li *ngFor="#log of logs">{{log}}</li>
    </ul>
  `
})
export class Messages implements OnActivate{
  logs: Array<string>;
  constructor(private nav: NavSvc, rem: RemSvc) {
    this.logs = rem.messages;
  }

  routerOnActivate() {
    this.nav.navChange.emit('messages');
  }
}
