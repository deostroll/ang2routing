import {Component} from 'angular2/core';
// import {OnActivate, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navs',
  templateUrl: 'app/cmps/navs/links.html',
  directives: [ROUTER_DIRECTIVES]
})

export class Navigation {
  constructor() {
    console.log('Navigation');
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
}
