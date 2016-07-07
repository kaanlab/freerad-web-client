import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { GroupAttr } from './groupattr';
import { GroupAttrService } from './groupattr.service';
import { Group } from '../group/group';
import { GroupService } from '../group/group.service';

@Component({
    selector: 'groupattr-edit',
    templateUrl: 'app/groupattr/groupattr-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        Toasty        
    ],
    providers: [ 
        GroupAttrService,
        GroupService
    ]   
})

export class GroupAttrEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() groupAttr: GroupAttr = new GroupAttr();
    @Input() groups: Group[]; 
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private groupAttrService: GroupAttrService,
        private groupService: GroupService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.groupAttrService.getGroupAttr(id)
                             .then(groupAttr => this.groupAttr = groupAttr)
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
        this.groupAttrService.editGroupAttr(this.groupAttr)
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
        this.router.navigateByUrl('/group');
    }

    private getMessage(): string {
        return 'Доп.атрибуты группы' + this.groupAttr.groupName + ' обновлены!';
    }
}