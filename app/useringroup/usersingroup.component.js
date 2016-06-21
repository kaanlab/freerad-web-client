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
//import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';
var usersingroup_list_component_1 = require('./usersingroup-list.component');
var useringroup_detail_component_1 = require('./useringroup-detail.component');
var useringroup_add_component_1 = require('./useringroup-add.component');
var useringroup_edit_component_1 = require('./useringroup-edit.component');
var UsersInGroupComponent = (function () {
    function UsersInGroupComponent() {
    }
    UsersInGroupComponent = __decorate([
        core_1.Component({
            selector: 'usersingroup',
            template: "\n            <router-outlet></router-outlet>            \n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'UsersInGroupList', component: usersingroup_list_component_1.UsersInGroupListComponent, useAsDefault: true },
            { path: '/:id', name: 'UserInGroupDetail', component: useringroup_detail_component_1.UserInGroupDetailComponent },
            { path: '/add', name: 'UserInGroupAdd', component: useringroup_add_component_1.UserInGroupAddComponent },
            { path: '/edit/:id', name: 'UserInGroupEdit', component: useringroup_edit_component_1.UserInGroupEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], UsersInGroupComponent);
    return UsersInGroupComponent;
}());
exports.UsersInGroupComponent = UsersInGroupComponent;
//# sourceMappingURL=usersingroup.component.js.map