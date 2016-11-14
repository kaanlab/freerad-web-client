import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
//import { UsersComponent }       from './user/users.component';
//import { GroupsComponent }      from './group/groups.component';
//import { NasesComponent }       from './nas/nases.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }
//   { path: 'user',      component: UsersComponent }, 
//   { path: 'group',     component: GroupsComponent },
//   { path: 'nas',       component: NasesComponent }    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
      constructor (
       private title: Title
   ) { }
 
    setTitle(newTitle: string) {
        this.title.setTitle(newTitle);
    }
}