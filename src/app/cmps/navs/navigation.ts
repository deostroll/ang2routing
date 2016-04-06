import {Component} from 'angular2/core';
// import {OnActivate, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavSvc} from './../../svcs/NavSvc';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'navs',
  templateUrl: 'app/cmps/navs/links.html',
  directives: [ROUTER_DIRECTIVES, NgClass],
  // events: ['navChange']
})

export class Navigation {
  view: string;

  constructor(private nav: NavSvc) {
    console.log('Navigation');
    // nav.navChange.subscribe((vw)=> {
    //   console.log('nav change:', vw);
    //   this.view = vw;
    // });
    nav.subscribe(route => this.view = route);
  }

  // routerCanReuse() {
  //   return true;
  // }
  //
  // routerOnReuse() {
  //   console.log('reuse');
  // }

  // routerCanActivate() {
  //   return true;
  // }
  //
  // routerOnActivate(next: any, prev: any){
  //   console.log('next:', next, 'prev:', prev);
  // }

  setView(viewName: string) {
    this.view = viewName;
  }
}
