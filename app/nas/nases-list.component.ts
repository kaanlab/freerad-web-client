import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteConfig } from '@angular/router-deprecated';

import { Nas } from './nas';
import { NasService } from './nas.service';

@Component({
    selector: 'nases-list',
    templateUrl: 'app/nas/nases-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [NasService]      
})

export class NasesListComponent implements OnInit {
    
    private loading:boolean = true;
    
    nases: Nas[];
    //selectedUser: User;
    errorMessage: any;
    
    constructor(
        private router: Router,
        private nasService: NasService       
        ) { }

    ngOnInit() {
        this.nasService.getNases()
            .then(nases => this.nases = nases)
            .then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewNas() {
        this.navigateToNewNas()
    }

    private navigateToNewNas(){
        this.router.navigate(['NasAdd']);
    }
}