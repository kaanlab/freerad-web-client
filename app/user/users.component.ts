import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UsersListComponent } from './users-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';

@Component({
    selector: 'users',
    template: `
            <router-outlet></router-outlet>
            <ng2-toasty></ng2-toasty>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Toasty
    ]
})

@RouteConfig([
    { path: '/', name: 'UsersList', component: UsersListComponent, useAsDefault: true },
    { path: '/:id', name: 'UserDetail', component: UserDetailComponent },
    { path: '/add', name: 'UserAdd', component: UserAddComponent },
    { path: '/edit/:id', name: 'UserEdit', component: UserEditComponent}
    
])

export class UsersComponent {
    
}