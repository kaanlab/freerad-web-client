import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/user/users-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]      
})

export class UsersListComponent implements OnInit {
    
    private loading:boolean = true;
    
    users: User[];
    selectedUser: User;
    errorMessage: any;
    
    constructor(
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
            .then(users => this.users = users).then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewUser() {
        this.navigateToNewUser()
    }

    onSelect(user: User) { 
      this.selectedUser = user;      
    }

    private navigateToNewUser(){
        this.router.navigate(['UserAdd']);
    }
}