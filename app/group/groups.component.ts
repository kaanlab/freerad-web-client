import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { GroupsListComponent } from './groups-list.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupAddComponent } from './group-add.component';
import { GroupEditComponent } from './group-edit.component';
import { GroupsAttrComponent } from '../groupattr/groupsattr.component';
import { GroupAttrDetailComponent } from '../groupattr/groupattr-detail.component';
import { GroupAttrAddComponent } from '../groupattr/groupattr-add.component';
import { GroupAttrEditComponent } from '../groupattr/groupattr-edit.component';

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
    { path: '/edit/:id', name: 'GroupEdit', component: GroupEditComponent},
    { path: '/groupattr/...', name: 'GroupsAttr', component: GroupsAttrComponent },
    { path: '/groupattr/:id', name: 'GroupAttrDetail', component: GroupAttrDetailComponent },
    { path: '/groupattr/add', name: 'GroupAttrAdd', component: GroupAttrAddComponent },
    { path: '/groupattr/edit/:id', name: 'GroupAttrEdit', component: GroupAttrEditComponent}     
])

export class GroupsComponent {
    
}