import { Component } from '@angular/core';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

//import { GroupsListComponent } from './groups-list.component';
//import { GroupDetailComponent } from './group-detail.component';
//import { GroupAddComponent } from './group-add.component';
//import { GroupEditComponent } from './group-edit.component';
//import { GroupsAttrComponent } from '../groupattr/groupsattr.component';
//import { GroupAttrDetailComponent } from '../groupattr/groupattr-detail.component';
//import { GroupAttrAddComponent } from '../groupattr/groupattr-add.component';
//import { GroupAttrEditComponent } from '../groupattr/groupattr-edit.component';

@Component({
    selector: 'groups',
    template: `
            <router-outlet></router-outlet>
            <ng2-toasty></ng2-toasty>
    `
})

export class GroupsComponent {
    
}