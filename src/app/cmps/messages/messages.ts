import {Component} from 'angular2/core';
import {OnActivate} from 'angular2/router';
import {NavSvc} from './../../svcs/NavSvc';

@Component({
  template: 'Messages'
})
export class Messages implements OnActivate{
  constructor(private nav: NavSvc) {

  }

  routerOnActivate() {
    this.nav.navChange.emit('messages');
  }
}
