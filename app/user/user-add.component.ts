import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-add',
    templateUrl: 'app/user/user-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ UserService ]   
})

export class UserAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    user: User;
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userService: UserService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.user = new User();             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userService.addUser(this.user)
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
        this.user = new User();
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigate(['UsersList']);
    }

    private getMessage(): string {
        return 'Пользователь ' + this.user.userName + ' сохранен!';
    }
}