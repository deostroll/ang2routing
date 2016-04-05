import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ReminderApp} from './app/app';
import {RemSvc} from './app/svcs/RemSvc';
import {NavSvc} from './app/svcs/NavSvc';

bootstrap(ReminderApp, [ROUTER_PROVIDERS, RemSvc, NavSvc]);
