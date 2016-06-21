import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteConfig } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';
import { UsersAttrListComponent } from '../userattr/usersattr-list.component';
import { UsersInGroupListComponent } from '../useringroup/usersingroup-list.component';

@Component({
    selector: 'users-list',
    templateUrl: 'app/user/users-list.component.html',
    directives: [
        ROUTER_DIRECTIVES, 
        UsersAttrListComponent,
        UsersInGroupListComponent
    ],
    providers: [UserService]      
})

export class UsersListComponent implements OnInit {
    
    private loading:boolean = true;
    
    users: User[];
    //selectedUser: User;
    errorMessage: any;
    
    constructor(
        private router: Router,
        private userService: UserService       
        ) { }

    ngOnInit() {
        this.userService.getUsers()
            .then(users => this.users = users)
            .then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewUser() {
        this.navigateToNewUser()
    }

    private navigateToNewUser(){
        this.router.navigate(['UserAdd']);
    }
}