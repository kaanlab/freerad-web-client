import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }        from '@angular/platform-browser';

import { GroupsListComponent }      from './groups-list.component';
import { GroupDetailComponent }     from './group-detail.component';
import { GroupAddComponent }        from './group-add.component';
import { GroupEditComponent }       from './group-edit.component';
import { GroupsAttrComponent }      from '../groupattr/groupsattr.component';
import { GroupAttrDetailComponent } from '../groupattr/groupattr-detail.component';
import { GroupAttrAddComponent }    from '../groupattr/groupattr-add.component';
import { GroupAttrEditComponent }   from '../groupattr/groupattr-edit.component';

const groupsRoutes: Routes = [
    { path: '', redirectTo: '/groupslist', pathMatch: 'full'},
    { path: 'groupslist',         component: GroupsListComponent },
    { path: 'groups/:id',         component: GroupDetailComponent },
    { path: 'groups/add',         component: GroupAddComponent },
    { path: 'groups/edit/:id',    component: GroupEditComponent},
    { path: 'groupattr',          component: GroupsAttrComponent },
    { path: 'groupattr/:id',      component: GroupAttrDetailComponent },
    { path: 'groupattr/add',      component: GroupAttrAddComponent },
    { path: 'groupattr/edit/:id', component: GroupAttrEditComponent}     
]

@NgModule({
  imports: [ RouterModule.forChild(groupsRoutes) ],
  exports: [ RouterModule ]
})

export class GroupsRoutingModule { }