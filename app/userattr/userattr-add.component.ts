import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { UserAttr } from './userattr';
import { UserAttrService } from './userattr.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'userattr-add',
    templateUrl: 'app/userattr/userattr-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ 
        UserAttrService,
        UserService
    ]   
})

export class UserAttrAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    userAttr: UserAttr;
    users: User[];  

    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userAttrService: UserAttrService,
        private userService: UserService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.userAttr = new UserAttr();
        this.userService.getUsers()
                        .then(users => this.users = users)            
                        .catch(error => this.errorMessage = error);             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userAttrService.addUserAttr(this.userAttr)
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
        this.userAttr = new UserAttr();
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
        return 'Пользователю ' + this.userAttr.userName + ' добавлен дополнительный атибут!';
    }
}