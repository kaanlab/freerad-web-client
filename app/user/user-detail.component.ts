import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,        
        Toasty
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
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userService.getUser(id).then(user => this.user = user);        
    }

    onDelete() {
        this.userService.deleteUser(this.user)
                        .then(() => this.toastyService
                                        .error({
                                            title: "Сообщение:",
                                            msg: this.getMessage(),
                                            showClose: true,
                                            timeout: 9000,
                                            theme: "bootstrap"
                                        }))
                        .then(() => this.goBack())
                        .catch(error => this.errorMessage = error);
    }

    goBack(){
        this.navigateBack();
    }

    onEdit(){
        let id = +this.routeParams.get('id');
        this.router.navigate(['UserEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigate(['UsersList']);
    }

    private getMessage(): string {
        return 'Пользователь ' + this.user.userName + ' удален!';
    }    
}