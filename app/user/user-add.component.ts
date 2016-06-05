import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { NgForm } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-add',
    templateUrl: 'app/user/user-add.component.html',        
    providers: [UserService]
})

export class UserAddComponent implements OnInit {
    
    private editMode = 'create';
    private submitted = false;
    
    user: User;    
    errorMessage: any;
    active = true;   

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
        this.userService.addUser(this.user).subscribe(() => {  }, (error) => {
                                         this.errorMessage = <any>error;
                                          console.error(error);
                            });
       
        this.submitted = true;
        
        this.navigateBack();
        
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