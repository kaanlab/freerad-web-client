import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
    selector: 'group-add',
    templateUrl: 'app/group/group-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ GroupService ]   
})

export class GroupAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    group: Group;
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private groupService: GroupService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.group = new Group();             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.groupService.addGroup(this.group)
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
        this.group = new Group();
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigate(['GroupsList']);
    }

    private getMessage(): string {
        return 'Группа ' + this.group.groupName + ' сохранена!';
    }
}