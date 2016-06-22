import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { Nas } from './nas';
import { NasService } from './nas.service';

@Component({
    selector: 'nas-add',
    templateUrl: 'app/nas/nas-add.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ NasService ]   
})

export class NasAddComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    nas: Nas;
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private nasService: NasService,
        private router: Router,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        this.nas = new Nas();             
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.nasService.addNas(this.nas)
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
        this.nas = new Nas();
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    goBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this.router.navigate(['NasesList']);
    }

    private getMessage(): string {
        return 'Пользователь ' + this.nas.nasName + ' сохранен!';
    }
}