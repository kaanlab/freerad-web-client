import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { UserAttr } from './userattr';
import { UserAttrService } from './userattr.service';

@Component({
    selector: 'usersattr-list',
    templateUrl: 'app/userattr/usersattr-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserAttrService]      
})

export class UsersAttrListComponent implements OnInit {
    
    private loading:boolean = true;
    
    userAttrs: UserAttr[];
    selectedUser: UserAttr;
    errorMessage: any;
    
    constructor(
        private router: Router,
        private userAttrService: UserAttrService       
        ) { }

    ngOnInit() {
        this.userAttrService.getUsersAttr()
            .then(userAttrs => this.userAttrs = userAttrs)
            .then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewUserAttr() {
        this.navigateToNewUserAttr()
    }

    private navigateToNewUserAttr(){
        this.router.navigate(['UserAttrAdd']);
    }
}