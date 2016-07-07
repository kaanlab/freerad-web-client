import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UserInGroup } from './useringroup';
import { UserInGroupService } from './useringroup.service';

@Component({
    selector: 'useringroup-detail',
    templateUrl: 'app/useringroup/useringroup-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        Toasty
    ],
    providers: [ UserInGroupService ]  
})

export class UserInGroupDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    userInGroup: UserInGroup = new UserInGroup();
    errorMessage: any

    constructor(
        private userInGroupService: UserInGroupService,
        private routeParams: RouteParams,
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userInGroupService.getUserInGroup(id).then(userInGroup => this.userInGroup = userInGroup);               
    }

    onDelete() {
        this.userInGroupService.deleteUserFromGroup(this.userInGroup)
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
        this.router.navigate(['UserInGroupEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigateByUrl('/user');
    }

    private getMessage(): string {
        return 'Пользователь ' + this.userInGroup.userName + ' удален из группы ' + this.userInGroup.groupName + '!';
    }    
}