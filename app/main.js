"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//import { bootstrap }    from '@angular/platform-browser-dynamic';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
//import { Title } from '@angular/platform-browser';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';
//
////import { enableProdMode } from "@angular/core";
//
//import 'rxjs/Rx';
//import { ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData } from 'ng2-toasty/ng2-toasty';
//
//import { AppComponent } from './app.component';
//
////enableProdMode();
//
//bootstrap(AppComponent, [
//    HTTP_PROVIDERS,
//    ROUTER_PROVIDERS,
//    ToastyService, 
//    ToastyConfig,
//    Title,
//    disableDeprecatedForms(),
//    provideForms()
//]).catch((err: any) => console.error(err)); 
//# sourceMappingURL=main.js.map