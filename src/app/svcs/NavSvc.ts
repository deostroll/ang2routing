import {EventEmitter} from 'angular2/core';
import {Injectable, Output} from 'angular2/core';

@Injectable()
export class NavSvc {
  @Output() navChange: EventEmitter<string> = new EventEmitter();
  // navChange: EventEmitter<string> = new EventEmitter();
}
