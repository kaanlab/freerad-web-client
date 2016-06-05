import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/user/users-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, HTTP_PROVIDERS]
})
export class UsersListComponent implements OnInit {

    constructor(private userService: UserService) { }

    users: User[];
    errorMessage: any;

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error);
    }
}