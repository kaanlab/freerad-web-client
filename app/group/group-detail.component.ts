import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }            from '@angular/router';
import { NgForm }            from '@angular/forms';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { Group }        from './group';
import { GroupService } from './group.service';

@Component({
    selector: 'group-detail',
    templateUrl: 'app/group/group-detail.component.html',    
//    directives: [ 
//        ROUTER_DIRECTIVES,
//        Toasty
//    ],
//    providers: [ GroupService ]  
})

export class GroupDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    group: Group = new Group();
    errorMessage: any

    constructor(
        private groupService: GroupService,        
        private toastyService: ToastyService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = +this.route.params['id'];
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
        let id = +this.route.params['id'];
        this.router.navigate(['GroupEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigate(['/groupslist']);
    }

    private getMessage(): string {
        return 'Группа ' + this.group.groupName + ' удалена!';
    }    
}