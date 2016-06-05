import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from  '@angular/router-deprecated';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [ROUTER_DIRECTIVES]   
})

export class DashboardComponent implements OnInit {

    ngOnInit() {

    }
}