import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

//import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { GroupsAttrListComponent } from './groupsattr-list.component';
import { GroupAttrDetailComponent } from './groupattr-detail.component';
import { GroupAttrAddComponent } from './groupattr-add.component';
import { GroupAttrEditComponent } from './groupattr-edit.component';

@Component({
    selector: 'groups-attr',
    template: `
            <router-outlet></router-outlet>            
    `,
    directives: [
        ROUTER_DIRECTIVES
        //Toasty
    ]
})

@RouteConfig([
    { path: '/', name: 'GroupsAttrList', component: GroupsAttrListComponent, useAsDefault: true },
    { path: '/:id', name: 'GroupAttrDetail', component: GroupAttrDetailComponent },
    { path: '/add', name: 'GroupAttrAdd', component: GroupAttrAddComponent },
    { path: '/edit/:id', name: 'GroupAttrEdit', component: GroupAttrEditComponent}    
])

export class GroupsAttrComponent {
    
}