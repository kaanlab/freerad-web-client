import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
    selector: 'group-edit',
    templateUrl: 'app/group/group-edit.component.html',
//    directives: [
//        ROUTER_DIRECTIVES,
//        Toasty        
//    ],
//    providers: [ GroupService ]   
})

export class GroupEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() group: Group = new Group();
    errorMessage: any;
    active: boolean = true;   

    constructor(        
        private groupService: GroupService,
        private router: Router,
        private route: ActivatedRoute,        
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.groupService.getGroup(id).then((group: Group) => this.group = group);          
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
        setTimeout(()=> this.active = true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigate(['/groupslist']);
    }

    private getMessage(): string {
        return 'Данные о группе ' + this.group.groupName + ' обновлены!';
    }
}