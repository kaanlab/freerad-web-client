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
var groups_list_component_1 = require('./groups-list.component');
var group_detail_component_1 = require('./group-detail.component');
var group_add_component_1 = require('./group-add.component');
var group_edit_component_1 = require('./group-edit.component');
var groupsattr_component_1 = require('../groupattr/groupsattr.component');
var groupattr_detail_component_1 = require('../groupattr/groupattr-detail.component');
var groupattr_add_component_1 = require('../groupattr/groupattr-add.component');
var groupattr_edit_component_1 = require('../groupattr/groupattr-edit.component');
var GroupsComponent = (function () {
    function GroupsComponent() {
    }
    GroupsComponent = __decorate([
        core_1.Component({
            selector: 'groups',
            template: "\n            <router-outlet></router-outlet>\n            <ng2-toasty></ng2-toasty>\n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'GroupsList', component: groups_list_component_1.GroupsListComponent, useAsDefault: true },
            { path: '/:id', name: 'GroupDetail', component: group_detail_component_1.GroupDetailComponent },
            { path: '/add', name: 'GroupAdd', component: group_add_component_1.GroupAddComponent },
            { path: '/edit/:id', name: 'GroupEdit', component: group_edit_component_1.GroupEditComponent },
            { path: '/groupattr/...', name: 'GroupsAttr', component: groupsattr_component_1.GroupsAttrComponent },
            { path: '/groupattr/:id', name: 'GroupAttrDetail', component: groupattr_detail_component_1.GroupAttrDetailComponent },
            { path: '/groupattr/add', name: 'GroupAttrAdd', component: groupattr_add_component_1.GroupAttrAddComponent },
            { path: '/groupattr/edit/:id', name: 'GroupAttrEdit', component: groupattr_edit_component_1.GroupAttrEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map