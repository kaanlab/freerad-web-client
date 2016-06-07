import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { UsersListComponent } from './users-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserAddComponent } from './user-add.component';

@Component({
    selector: 'users',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'UsersList', component: UsersListComponent, useAsDefault: true },
    { path: '/:id', name: 'UserDetail', component: UserDetailComponent },
    { path: '/add', name: 'UserAdd', component: UserAddComponent }
    
])

export class UsersComponent {
    
}