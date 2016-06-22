import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm, NgClass } from '@angular/common';

import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { Nas } from './nas';
import { NasService } from './nas.service';

@Component({
    selector: 'nas-edit',
    templateUrl: 'app/nas/nas-edit.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass,
        Toasty        
    ],
    providers: [ NasService ]   
})

export class NasEditComponent implements OnInit {
    
    private editMode:string = 'create';
    private submitted:boolean = false;
    
    @Input() nas: Nas = new Nas();
    errorMessage: any;
    active:boolean = true;   

    constructor(        
        private nasService: NasService,
        private router: Router,
        private routeParams: RouteParams,
        private toastyService: ToastyService
        ) { }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.nasService.getNas(id).then(nas => this.nas = nas);          
    }
    
    onSubmit(){        
        this.submitted = true;
    }
    
    onSave(){        
        this.submitted = true;
        this.nasService.editNas(this.nas)
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
        return 'Данные пользователя ' + this.nas.nasName + ' успешно обновлены!';
    }
}