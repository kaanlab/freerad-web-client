import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

//import { enableProdMode } from "@angular/core";

import 'rxjs/Rx';
import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';

import { AppComponent } from './app.component';

//enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ToastyService, 
    ToastyConfig,
    Title
]);