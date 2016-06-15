import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { UserAttr } from './userattr';
import { UserAttrService } from './userattr.service';

@Component({
    selector: 'userattr-add',
    templateUrl: 'app/userattr/userattr-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ UserAttrService ]   
})

export class UserAttrEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() userAttr: UserAttr = new UserAttr();
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userAttrService: UserAttrService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userAttrService.getUserAttr(id).then(userAttr => this.userAttr = userAttr);          
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userAttrService.editUserAttr(this.userAttr)
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
        this.router.navigate(['UsersAttrList']);
    }

    private getMessage(): string {
        return 'Данные пользователя ' + this.userAttr.userName + ' успешно обновлены!';
    }
}