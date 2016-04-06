import {Component, Input} from 'angular2/core';

@Component({
  selector: 'stext',
  template: `
      <del *ngIf="strike">{{text}}</del>
      <span *ngIf="!strike">{{text}}</span>
  `
})
export class StrikedText {
  @Input() strike: boolean;
  @Input() text: string;
  constructor() {
    console.log(this.strike, this.text);
  }
}
