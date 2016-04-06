import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ReminderApp} from './app/app';
import {RemSvc} from './app/svcs/RemSvc';
import {NavSvc} from './app/svcs/NavSvc';
import {provide} from 'angular2/core';

var rem = new RemSvc();
rem.add('groceries', 'milk, biscuits, bread');
rem.add('pay bill', 'account number: 223322334');

bootstrap(ReminderApp, [ROUTER_PROVIDERS, provide(RemSvc, {useValue: rem}), NavSvc]);
// bootstrap(ReminderApp, [ROUTER_PROVIDERS, RemSvc, NavSvc]);

