import {Component} from 'angular2/core';
import {
  RouteConfig,
  Route,
  ROUTER_DIRECTIVES,
  // CanActivate,
  // OnActivate
} from 'angular2/router';
import {List} from './cmps/list/list';
import {Navigation} from './cmps/navs/navigation';
import {Profile} from './cmps/profile/profile';

@Component({
  selector: 'reminder-app',
  template: `
  <div class="container">
    <h1>Reminders</h1>
    <hr/>
    <navs></navs>

    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, Navigation]
  // directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route({ name: 'Home',     path:'/home',     component: List,    useAsDefault: true  }),
  new Route({ name: 'Profile',  path:'/profile',  component: Profile                      })
])
export class ReminderApp {
  constructor() {
    console.log('ReminderApp');
  }

  // routerOnActivate() {
  //   console.log('OnActivate');
  // }
}
