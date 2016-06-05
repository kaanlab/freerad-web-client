import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {UsersListComponent} from './users-list.component';
import {UserAddComponent} from './user-add.component';


@Component({
    selector: 'users',
    template: `<router-outlet></router-outlet>`,    
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'UsersList', component: UsersListComponent, useAsDefault: true },
    
    { path: '/add', name: 'UserAdd', component: UserAddComponent }
    
])

export class UsersComponent {
    
}