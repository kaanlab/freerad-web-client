import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './user/users.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS] 
})

@RouteConfig([
    { path: '/dashborard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/user/...', name: 'Users', component: UsersComponent }    
])

export class AppComponent {
   
   constructor (private router: Router) { }
   
   isCurrentRoute(route){
        var instruction = this.router.generate(route);
        return this.router.isRouteActive(instruction);
    }
}