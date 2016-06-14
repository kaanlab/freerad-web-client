import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
    selector: 'group-detail',
    templateUrl: 'app/group/group-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty
    ],
    providers: [ GroupService ]  
})

export class GroupDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    group: Group = new Group();
    errorMessage: any

    constructor(
        private groupService: GroupService,
        private routeParams: RouteParams,
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.groupService.getGroup(id).then(group => this.group = group);        
    }

    onDelete() {
        this.groupService.deleteGroup(this.group)
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
        this.router.navigate(['GroupEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigate(['GroupsList']);
    }

    private getMessage(): string {
        return 'Группа ' + this.group.groupName + ' удалена!';
    }    
}