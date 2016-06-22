"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var ng2_toasty_1 = require('ng2-toasty/ng2-toasty');
var nases_list_component_1 = require('./nases-list.component');
var nas_detail_component_1 = require('./nas-detail.component');
var nas_add_component_1 = require('./nas-add.component');
var nas_edit_component_1 = require('./nas-edit.component');
var NasesComponent = (function () {
    function NasesComponent() {
    }
    NasesComponent = __decorate([
        core_1.Component({
            selector: 'nases',
            template: "\n            <router-outlet></router-outlet>\n            <ng2-toasty></ng2-toasty>\n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'NasesList', component: nases_list_component_1.NasesListComponent, useAsDefault: true },
            { path: '/:id', name: 'NasDetail', component: nas_detail_component_1.NasDetailComponent },
            { path: '/add', name: 'NasAdd', component: nas_add_component_1.NasAddComponent },
            { path: '/edit/:id', name: 'NasEdit', component: nas_edit_component_1.NasEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], NasesComponent);
    return NasesComponent;
}());
exports.NasesComponent = NasesComponent;
//# sourceMappingURL=nases.component.js.map