import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteConfig } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';


@Component({
    selector: 'users-count',
    template: `
        <span class="badge" *ngFor="let user of users">
            {{ users.length }}
        </span>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]      
})

export class UsersCountComponent implements OnInit {
    
    users: User[];
    
    errorMessage: any;
    
    constructor(
        private router: Router,
        private userService: UserService       
        ) { }

    ngOnInit() {
        this.userService.getUsers()
            .then(users => this.users = users)           
            .catch(error => this.errorMessage = error);
    }
}