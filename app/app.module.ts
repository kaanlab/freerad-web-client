import { NgModule }           from '@angular/core';
import { BrowserModule, Title }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { UsersComponent }     from './user/users.component';
//import { GroupsComponent }    from './group/groups.component';
//import { NasesComponent }     from './nas/nases.component';
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports:      [ 
      BrowserModule,
      Title,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [ 
      AppComponent,
      DashboardComponent
  //    UsersComponent,
  //    GroupsComponent,
  //    NasesComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }