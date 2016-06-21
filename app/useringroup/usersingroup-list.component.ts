import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { UserInGroup } from './useringroup';
import { UserInGroupService } from './useringroup.service';

@Component({
    selector: 'usersingroup-list',
    templateUrl: 'app/useringroup/usersingroup-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserInGroupService]      
})

export class UsersInGroupListComponent implements OnInit {
    
    private loading:boolean = true;
    
    usersInGroup: UserInGroup[];
    errorMessage: any;
    
    constructor(
        private router: Router,
        private userInGroupService: UserInGroupService       
        ) { }

    ngOnInit() {
        this.userInGroupService.getUsersInGroup()
            .then(usersInGroup => this.usersInGroup = usersInGroup)
            .then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewUserInGroup() {
        this.navigateToNewUserInGroup()
    }

    private navigateToNewUserInGroup(){
        this.router.navigateByUrl('/user/group/add');
    }
}