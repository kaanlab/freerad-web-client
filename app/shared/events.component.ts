import { Component } from '@angular/core';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

import { UserAddComponent } from '../user/user-add.component';

@Component({
    selector: 'events',
    template: `
        
        <ng2-toasty></ng2-toasty>
    `,
    directives: [
        Toasty,
        UserAddComponent       
    ]   
})

export class EventsComponent  {
    
    constructor(
              private toastyService: ToastyService
        ) { }
    
    onNotify(message: string) {
     alert(message);
    }


}