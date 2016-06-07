import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/user/users-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]      
})

export class UsersListComponent implements OnInit {

    constructor(
        
        private userService: UserService) { }

    users: User[];
    errorMessage: any;

    ngOnInit() {
        this.userService.getUsers()
            .then(users => this.users = users)
            .catch(error => this.errorMessage = error);
    }
}