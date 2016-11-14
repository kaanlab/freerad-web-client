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
var group_service_1 = require('./group.service');
var groupsattr_list_component_1 = require('../groupattr/groupsattr-list.component');
var GroupsListComponent = (function () {
    function GroupsListComponent(router, groupService) {
        this.router = router;
        this.groupService = groupService;
        this.loading = true;
    }
    GroupsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups()
            .then(function (groups) { return _this.groups = groups; })
            .then(function (loading) { return _this.loading = false; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    GroupsListComponent.prototype.goToNewGroup = function () {
        this.navigateToNewGroup();
    };
    GroupsListComponent.prototype.navigateToNewGroup = function () {
        this.router.navigate(['GroupAdd']);
    };
    GroupsListComponent = __decorate([
        core_1.Component({
            selector: 'groups-list',
            templateUrl: 'app/group/groups-list.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                groupsattr_list_component_1.GroupsAttrListComponent
            ],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, group_service_1.GroupService])
    ], GroupsListComponent);
    return GroupsListComponent;
    var _a;
}());
exports.GroupsListComponent = GroupsListComponent;
//# sourceMappingURL=groups-list.component.js.map