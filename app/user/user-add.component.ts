import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-add',
    templateUrl: 'app/user/user-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass
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
        private router: Router
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
}