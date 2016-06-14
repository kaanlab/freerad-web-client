import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-add',
    templateUrl: 'app/user/user-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ UserService ]   
})

export class UserEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() user: User = new User();
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private userService: UserService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.userService.getUser(id).then(user => this.user = user);          
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.userService.editUser(this.user)
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
        return 'Данные пользователя ' + this.user.userName + ' успешно обновлены!';
    }
}