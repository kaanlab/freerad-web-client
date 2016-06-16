import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { GroupAttr } from './groupattr';
import { GroupAttrService } from './groupattr.service';

@Component({
    selector: 'groupattr-detail',
    templateUrl: 'app/groupattr/groupattr-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty
    ],
    providers: [ GroupAttrService ]  
})

export class GroupAttrDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    groupAttr: GroupAttr = new GroupAttr();
    errorMessage: any

    constructor(
        private groupAttrService: GroupAttrService,
        private routeParams: RouteParams,
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.groupAttrService.getGroupAttr(id).then(groupAttr => this.groupAttr = groupAttr);        
    }

    onDelete() {
        this.groupAttrService.deleteGroupAttr(this.groupAttr)
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
        this.router.navigate(['GroupAttrEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigateByUrl('/group');
    }

    private getMessage(): string {
        return 'Доп.атрибуты группы ' + this.groupAttr.groupName + ' удалены!';
    }    
}