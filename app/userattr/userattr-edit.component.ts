import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { UserAttr } from './userattr';
import { UserAttrService } from './userattr.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'userattr-edit',
    templateUrl: 'app/userattr/userattr-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,        
        Toasty        
    ],
    providers: [ 
        UserAttrService,
        UserService
    ]   
})

export class UserAttrEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() userAttr: UserAttr = new UserAttr();
    @Input() users: User[];
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userAttrService: UserAttrService,
        private userService: UserService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userAttrService.getUserAttr(id)
                            .then(userAttr => this.userAttr = userAttr)
                            .catch(error => this.errorMessage = error);;
        this.userService.getUsers()
                        .then(users => this.users = users)            
                        .catch(error => this.errorMessage = error);          
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
        this.router.navigateByUrl('/user');
    }

    private getMessage(): string {
        return 'Доп.атрибуты ' + this.userAttr.userName + ' обновлены!';
    }
}