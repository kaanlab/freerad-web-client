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
var useringroup_service_1 = require('./useringroup.service');
var UsersInGroupListComponent = (function () {
    function UsersInGroupListComponent(router, userInGroupService) {
        this.router = router;
        this.userInGroupService = userInGroupService;
        this.loading = true;
    }
    UsersInGroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInGroupService.getUsersInGroup()
            .then(function (usersInGroup) { return _this.usersInGroup = usersInGroup; })
            .then(function (loading) { return _this.loading = false; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UsersInGroupListComponent.prototype.goToNewUserInGroup = function () {
        this.navigateToNewUserInGroup();
    };
    UsersInGroupListComponent.prototype.navigateToNewUserInGroup = function () {
        this.router.navigateByUrl('/user/group/add');
    };
    UsersInGroupListComponent = __decorate([
        core_1.Component({
            selector: 'usersingroup-list',
            templateUrl: 'app/useringroup/usersingroup-list.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [useringroup_service_1.UserInGroupService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, useringroup_service_1.UserInGroupService])
    ], UsersInGroupListComponent);
    return UsersInGroupListComponent;
}());
exports.UsersInGroupListComponent = UsersInGroupListComponent;
//# sourceMappingURL=usersingroup-list.component.js.map