import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
    selector: 'group-edit',
    templateUrl: 'app/group/group-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ GroupService ]   
})

export class GroupEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() group: Group = new Group();
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private groupService: GroupService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.groupService.getGroup(id).then(group => this.group = group);          
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.groupService.editGroup(this.group)
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
        return 'Данные о группе ' + this.group.groupName + ' обновлены!';
    }
}