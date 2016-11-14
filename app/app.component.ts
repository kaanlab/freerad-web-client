import { Component } from '@angular/core';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
//import { Title } from '@angular/platform-browser';

//import { DashboardComponent } from './dashboard/dashboard.component';
//import { UsersComponent } from './user/users.component';
//import { GroupsComponent } from './group/groups.component';
//import { NasesComponent } from './nas/nases.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
//    directives: [
//        ROUTER_DIRECTIVES        
//    ],
//    providers: [ROUTER_PROVIDERS]     
})

//@RouteConfig([
//    { path: '/dashborard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
//    { path: '/user/...', name: 'Users', component: UsersComponent }, 
//    { path: '/group/...', name: 'Groups', component: GroupsComponent },
//    { path: '/nas/...', name: 'Nases', component: NasesComponent }    
//])

export class AppComponent {
   
//   constructor (
//       private router: Router,
//       private title: Title
//   ) { }
   
//   isCurrentRoute(route){
//        var instruction = this.router.generate(route);
//        return this.router.isRouteActive(instruction);
//    }
//
//    setTitle(newTitle: string) {
//        this.title.setTitle(newTitle);
//    }
}