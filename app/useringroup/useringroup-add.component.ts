import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { UserInGroup } from './useringroup';
import { UserInGroupService } from './useringroup.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Group } from '../group/group';
import { GroupService } from '../group/group.service';

@Component({
    selector: 'useringroup-add',
    templateUrl: 'app/useringroup/useringroup-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        Toasty        
    ],
    providers: [ 
        UserInGroupService,
        UserService,
        GroupService
    ]   
})

export class UserInGroupAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    userInGroup: UserInGroup;
    users: User[]; 
    groups: Group[]; 

    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userInGroupService: UserInGroupService,
        private userService: UserService,
        private groupService: GroupService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.userInGroup = new UserInGroup();
        this.userService.getUsers()
                        .then(users => this.users = users)            
                        .catch(error => this.errorMessage = error);
         this.groupService.getGroups()
                          .then(groups => this.groups = groups)
                          .catch(error => this.errorMessage = error);             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userInGroupService.addUserToGroup(this.userInGroup)
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
    
    clearForm(){        
        this.userInGroup = new UserInGroup();
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigateByUrl('/user');
    }

    private getMessage(): string {
        return 'Пользователь ' + this.userInGroup.userName + ' добавлен в группу ' + this.userInGroup.groupName + '!';
    }
}