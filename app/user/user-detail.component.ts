import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated'

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user-detail.component.html',    
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]  
})

export class UserDetailComponent implements OnInit {
    user: User = new User();

    constructor(
        private userService: UserService,
        private routeParams: RouteParams,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userService.getUser(id).then(user => this.user = user);        
    }    
}