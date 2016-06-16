import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { GroupAttr } from './groupattr';
import { GroupAttrService } from './groupattr.service';
import { Group } from '../group/group';
import { GroupService } from '../group/group.service';

@Component({
    selector: 'groupattr-add',
    templateUrl: 'app/groupattr/groupattr-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ 
        GroupAttrService,
        GroupService
    ]   
})

export class GroupAttrAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    groupAttr: GroupAttr;
    groups: Group[];  

    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private groupAttrService: GroupAttrService,
        private groupService: GroupService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.groupAttr = new GroupAttr();
        this.groupService.getGroups()
                        .then(groups => this.groups = groups)            
                        .catch(error => this.errorMessage = error);             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.groupAttrService.addGroupAttr(this.groupAttr)
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
        this.groupAttr = new GroupAttr();
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigateByUrl('/group');
    }

    private getMessage(): string {
        return 'Доп.атрибуты группы ' + this.groupAttr.groupName + ' сохранены!';
    }
}