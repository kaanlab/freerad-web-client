import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        NgClass
    ],
    providers: [ UserService ]  
})

export class UserDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    user: User = new User();
    errorMessage: any

    constructor(
        private userService: UserService,
        private routeParams: RouteParams,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userService.getUser(id).then(user => this.user = user);        
    }

    onDelete() {
        this.userService.deleteUser(this.user)
                        .then(() => this.goBack())
                        .catch(error => this.errorMessage = error);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigate(['UsersList']);
    }    
}