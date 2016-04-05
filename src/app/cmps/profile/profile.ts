import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';
import {NavSvc} from './../../svcs/NavSvc';
@Component({
  templateUrl:  'app/cmps/profile/profile.html'
})
export class Profile implements OnActivate {
  //This should cause error
  constructor(private nav: NavSvc) {

  }
  routerOnActivate(n: ComponentInstruction, p: ComponentInstruction) {
    console.log('Profile OnActivate');
    setTimeout(() => this.nav.navChange.emit('profile'), 100);    
  }
}
