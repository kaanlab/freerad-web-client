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
var groupsattr_list_component_1 = require('./groupsattr-list.component');
var groupattr_detail_component_1 = require('./groupattr-detail.component');
var groupattr_add_component_1 = require('./groupattr-add.component');
var groupattr_edit_component_1 = require('./groupattr-edit.component');
var GroupsAttrComponent = (function () {
    function GroupsAttrComponent() {
    }
    GroupsAttrComponent = __decorate([
        core_1.Component({
            selector: 'groups-attr',
            template: "\n            <router-outlet></router-outlet>            \n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'GroupsAttrList', component: groupsattr_list_component_1.GroupsAttrListComponent, useAsDefault: true },
            { path: '/:id', name: 'GroupAttrDetail', component: groupattr_detail_component_1.GroupAttrDetailComponent },
            { path: '/add', name: 'GroupAttrAdd', component: groupattr_add_component_1.GroupAttrAddComponent },
            { path: '/edit/:id', name: 'GroupAttrEdit', component: groupattr_edit_component_1.GroupAttrEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], GroupsAttrComponent);
    return GroupsAttrComponent;
}());
exports.GroupsAttrComponent = GroupsAttrComponent;
//# sourceMappingURL=groupsattr.component.js.map