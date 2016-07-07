import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgForm } from '@angular/forms';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { Nas } from './nas';
import { NasService } from './nas.service';

@Component({
    selector: 'nas-detail',
    templateUrl: 'app/nas/nas-detail.component.html',    
    directives: [ 
        ROUTER_DIRECTIVES,
        Toasty
    ],
    providers: [ NasService ]  
})

export class NasDetailComponent implements OnInit {
    
    private confirmDelete:boolean = false;

    nas: Nas = new Nas();
    errorMessage: any

    constructor(
        private nasService: NasService,
        private routeParams: RouteParams,
        private toastyService: ToastyService,
        private router: Router) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.nasService.getNas(id).then(nas => this.nas = nas);        
    }

    onDelete() {
        this.nasService.deleteNas(this.nas)
                        .then(() => this.toastyService
                                        .error({
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

    onEdit(){
        let id = +this.routeParams.get('id');
        this.router.navigate(['NasEdit', { id: id}]);
    }

    private navigateBack(){
        this.router.navigate(['NasesList']);
    }

    private getMessage(): string {
        return 'Устройство ' + this.nas.shortName + ' удалено!';
    }    
}