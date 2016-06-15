import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UsersAttrListComponent } from './usersattr-list.component';
import { UserAttrDetailComponent } from './userattr-detail.component';
import { UserAttrAddComponent } from './userattr-add.component';
import { UserAttrEditComponent } from './userattr-edit.component';

@Component({
    selector: 'users-attr',
    template: `
            <router-outlet></router-outlet>
            
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Toasty
    ]
})

@RouteConfig([
    { path: '/', name: 'UsersAttrList', component: UsersAttrListComponent, useAsDefault: true },
    { path: '/:id', name: 'UserAttrDetail', component: UserAttrDetailComponent },
    { path: '/add', name: 'UserAttrAdd', component: UserAttrAddComponent },
    { path: '/edit/:id', name: 'UserAttrEdit', component: UserAttrEditComponent}    
])

export class UsersAttrComponent {
    
}