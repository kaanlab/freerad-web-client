import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

//import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UsersInGroupListComponent } from './usersingroup-list.component';
import { UserInGroupDetailComponent } from './useringroup-detail.component';
import { UserInGroupAddComponent } from './useringroup-add.component';
import { UserInGroupEditComponent } from './useringroup-edit.component';

@Component({
    selector: 'usersingroup',
    template: `
            <router-outlet></router-outlet>            
    `,
    directives: [
        ROUTER_DIRECTIVES
        //Toasty
    ]
})

@RouteConfig([
    { path: '/', name: 'UsersInGroupList', component: UsersInGroupListComponent, useAsDefault: true },
    { path: '/:id', name: 'UserInGroupDetail', component: UserInGroupDetailComponent },
    { path: '/add', name: 'UserInGroupAdd', component: UserInGroupAddComponent },
    { path: '/edit/:id', name: 'UserInGroupEdit', component: UserInGroupEditComponent}    
])

export class UsersInGroupComponent {
    
}