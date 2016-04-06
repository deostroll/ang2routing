import {Component} from 'angular2/core';
import {OnActivate} from 'angular2/router';
import {NavSvc, NavigationComponent} from './../../svcs/NavSvc';
import {RemSvc} from './../../svcs/RemSvc';

@Component({
  template: `
    <ul>
      <li *ngFor="#log of logs">{{log}}</li>
    </ul>
  `
})
export class Messages extends NavigationComponent {
  logs: Array<string>;
  constructor(nav: NavSvc, rem: RemSvc) {
    super(nav, "messages");
    this.logs = rem.messages;
  }  
}
