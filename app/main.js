"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
//import { enableProdMode } from "@angular/core";
require('rxjs/Rx');
var ng2_toasty_1 = require('ng2-toasty/ng2-toasty');
var app_component_1 = require('./app.component');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    ng2_toasty_1.ToastyService,
    ng2_toasty_1.ToastyConfig,
    platform_browser_1.Title,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map