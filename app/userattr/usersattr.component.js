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
var usersattr_list_component_1 = require('./usersattr-list.component');
var userattr_detail_component_1 = require('./userattr-detail.component');
var userattr_add_component_1 = require('./userattr-add.component');
var userattr_edit_component_1 = require('./userattr-edit.component');
var UsersAttrComponent = (function () {
    function UsersAttrComponent() {
    }
    UsersAttrComponent = __decorate([
        core_1.Component({
            selector: 'users-attr',
            template: "\n            <router-outlet></router-outlet>\n            <ng2-toasty></ng2-toasty>\n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'UsersAttrList', component: usersattr_list_component_1.UsersAttrListComponent, useAsDefault: true },
            { path: '/:id', name: 'UserAttrDetail', component: userattr_detail_component_1.UserAttrDetailComponent },
            { path: '/add', name: 'UserAttrAdd', component: userattr_add_component_1.UserAttrAddComponent },
            { path: '/edit/:id', name: 'UserAttrEdit', component: userattr_edit_component_1.UserAttrEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], UsersAttrComponent);
    return UsersAttrComponent;
}());
exports.UsersAttrComponent = UsersAttrComponent;
//# sourceMappingURL=usersattr.component.js.map