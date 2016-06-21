import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { UserInGroup } from './useringroup';
import { UserInGroupService } from './useringroup.service';

import { Group } from '../group/group';
import { GroupService } from '../group/group.service';

@Component({
    selector: 'useringroup-edit',
    templateUrl: 'app/useringroup/useringroup-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ 
        UserInGroupService,
        GroupService
    ]   
})

export class UserInGroupEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() userInGroup: UserInGroup = new UserInGroup();
    groups: Group[];
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userInGroupService: UserInGroupService,
        private groupService: GroupService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userInGroupService.getUserInGroup(id)
                               .then(userInGroup => this.userInGroup = userInGroup);
        this.groupService.getGroups()
                          .then(groups => this.groups = groups)
                          .catch(error => this.errorMessage = error);          
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userInGroupService.editUserInGroup(this.userInGroup)
                        .then(() => this.toastyService
                                        .success({
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

    private navigateBack(){
        this.router.navigateByUrl('/user');
    }

    private getMessage(): string {
        return 'Пользователь ' + this.userInGroup.userName + ' добавлен в группу' + this.userInGroup.groupName + '!';
    }
}