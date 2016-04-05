import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl:  'app/cmps/profile/profile.html'
})
export class Profile implements OnActivate {
  //This should cause error
  routerOnActivate(n: ComponentInstruction, p: ComponentInstruction) {
    console.log('OnActivate');
    return false;
  }
}
