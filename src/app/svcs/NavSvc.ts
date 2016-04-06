import {EventEmitter} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {OnActivate} from 'angular2/router';

@Injectable()
export class NavSvc {
  navChange: EventEmitter<string> = new EventEmitter();
  // navChange: EventEmitter<string> = new EventEmitter();
  doNotify(route: string) {
    this.navChange.emit(route);
  }
  
  subscribe(f: Function) {
    return this.navChange.subscribe(f);
  }
}

export class NavigationComponent implements OnActivate {
  constructor(private nav: NavSvc, private name: string) {
    
  }
  
  private notify(value: string) {
    setTimeout(() => this.nav.doNotify(value), 300);
  }
  
  routerOnActivate() {
    // setTimeout(function() {
    //   this.nav.doNotify(this.name);  
    // }, 500);    
    this.notify(this.name);  
  }
  
  ngOnDestroy() {
    // this.nav.doNotify(null);
    this.notify(null);
  }
} 