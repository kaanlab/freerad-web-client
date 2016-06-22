import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { NasesListComponent } from './nases-list.component';
import { NasDetailComponent } from './nas-detail.component';
import { NasAddComponent } from './nas-add.component';
import { NasEditComponent } from './nas-edit.component';

@Component({
    selector: 'nases',
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
    { path: '/', name: 'NasesList', component: NasesListComponent, useAsDefault: true },
    { path: '/:id', name: 'NasDetail', component: NasDetailComponent },
    { path: '/add', name: 'NasAdd', component: NasAddComponent },
    { path: '/edit/:id', name: 'NasEdit', component: NasEditComponent}  
])

export class NasesComponent {
    
}