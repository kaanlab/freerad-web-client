import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UserAttr } from './userattr';
import { UserAttrService } from './userattr.service';

@Component({
    selector: 'userattr-detail',
    templateUrl: 'app/userattr/userattr-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        Toasty
    ],
    providers: [ UserAttrService ]  
})

export class UserAttrDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    userAttr: UserAttr = new UserAttr();
    errorMessage: any

    constructor(
        private userAttrService: UserAttrService,
        private routeParams: RouteParams,
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userAttrService.getUserAttr(id)
                            .then(userAttr => this.userAttr = userAttr)
                            .catch(error => this.errorMessage = error);        
    }

    onDelete() {
        this.userAttrService.deleteUserAttr(this.userAttr)
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
        this.router.navigate(['UserAttrEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigateByUrl('/user');
    }

    private getMessage(): string {
        return 'Доп.атрибуты ' + this.userAttr.userName + ' удалены!';
    }    
}