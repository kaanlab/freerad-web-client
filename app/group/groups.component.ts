import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { GroupsListComponent } from './groups-list.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupAddComponent } from './group-add.component';
import { GroupEditComponent } from './group-edit.component';

@Component({
    selector: 'groups',
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
    { path: '/', name: 'GroupsList', component: GroupsListComponent, useAsDefault: true },
    { path: '/:id', name: 'GroupDetail', component: GroupDetailComponent },
    { path: '/add', name: 'GroupAdd', component: GroupAddComponent },
    { path: '/edit/:id', name: 'GroupEdit', component: GroupEditComponent}
    
])

export class GroupsComponent {
    
}