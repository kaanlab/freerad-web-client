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
var useringroup_1 = require('./useringroup');
var useringroup_service_1 = require('./useringroup.service');
var UserInGroupDetailComponent = (function () {
    function UserInGroupDetailComponent(userInGroupService, routeParams, toastyService, router) {
        this.userInGroupService = userInGroupService;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.router = router;
        this.confirmDelete = false;
        this.userInGroup = new useringroup_1.UserInGroup();
    }
    UserInGroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userInGroupService.getUserInGroup(id).then(function (userInGroup) { return _this.userInGroup = userInGroup; });
    };
    UserInGroupDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.userInGroupService.deleteUserFromGroup(this.userInGroup)
            .then(function () { return _this.toastyService
            .error({
            title: "Сообщение:",
            msg: _this.getMessage(),
            showClose: true,
            timeout: 9000,
            theme: "bootstrap"
        }); })
            .then(function () { return _this.goBack(); })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserInGroupDetailComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserInGroupDetailComponent.prototype.onEdit = function () {
        var id = +this.routeParams.get('id');
        this.router.navigate(['UserInGroupEdit', { id: id }]);
    };
    UserInGroupDetailComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/user');
    };
    UserInGroupDetailComponent.prototype.getMessage = function () {
        return 'Пользователь ' + this.userInGroup.userName + ' удален из группы ' + this.userInGroup.groupName + '!';
    };
    UserInGroupDetailComponent = __decorate([
        core_1.Component({
            selector: 'useringroup-detail',
            templateUrl: 'app/useringroup/useringroup-detail.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [useringroup_service_1.UserInGroupService]
        }), 
        __metadata('design:paramtypes', [useringroup_service_1.UserInGroupService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof ng2_toasty_1.ToastyService !== 'undefined' && ng2_toasty_1.ToastyService) === 'function' && _b) || Object, (typeof (_c = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _c) || Object])
    ], UserInGroupDetailComponent);
    return UserInGroupDetailComponent;
    var _a, _b, _c;
}());
exports.UserInGroupDetailComponent = UserInGroupDetailComponent;
//# sourceMappingURL=useringroup-detail.component.js.map