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
var users_list_component_1 = require('./users-list.component');
var user_detail_component_1 = require('./user-detail.component');
var user_add_component_1 = require('./user-add.component');
var user_edit_component_1 = require('./user-edit.component');
var usersattr_component_1 = require('../userattr/usersattr.component');
var userattr_detail_component_1 = require('../userattr/userattr-detail.component');
var userattr_add_component_1 = require('../userattr/userattr-add.component');
var userattr_edit_component_1 = require('../userattr/userattr-edit.component');
var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            template: "\n            <router-outlet></router-outlet>\n            <ng2-toasty></ng2-toasty>\n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'UsersList', component: users_list_component_1.UsersListComponent, useAsDefault: true },
            { path: '/:id', name: 'UserDetail', component: user_detail_component_1.UserDetailComponent },
            { path: '/add', name: 'UserAdd', component: user_add_component_1.UserAddComponent },
            { path: '/edit/:id', name: 'UserEdit', component: user_edit_component_1.UserEditComponent },
            { path: '/userattr/...', name: 'UsersAttr', component: usersattr_component_1.UsersAttrComponent },
            { path: '/userattr/:id', name: 'UserAttrDetail', component: userattr_detail_component_1.UserAttrDetailComponent },
            { path: '/userattr/add', name: 'UserAttrAdd', component: userattr_add_component_1.UserAttrAddComponent },
            { path: '/userattr/edit/:id', name: 'UserAttrEdit', component: userattr_edit_component_1.UserAttrEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map