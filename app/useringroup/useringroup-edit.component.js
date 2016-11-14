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
var group_service_1 = require('../group/group.service');
var UserInGroupEditComponent = (function () {
    function UserInGroupEditComponent(userInGroupService, groupService, router, routeParams, toastyService) {
        this.userInGroupService = userInGroupService;
        this.groupService = groupService;
        this.router = router;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.userInGroup = new useringroup_1.UserInGroup();
        this.active = true;
    }
    UserInGroupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userInGroupService.getUserInGroup(id)
            .then(function (userInGroup) { return _this.userInGroup = userInGroup; });
        this.groupService.getGroups()
            .then(function (groups) { return _this.groups = groups; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserInGroupEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserInGroupEditComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userInGroupService.editUserInGroup(this.userInGroup)
            .then(function () { return _this.toastyService
            .success({
            title: "Сообщение:",
            msg: _this.getMessage(),
            showClose: true,
            timeout: 9000,
            theme: "bootstrap"
        }); })
            .then(function () { return _this.goBack(); })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserInGroupEditComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserInGroupEditComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/user');
    };
    UserInGroupEditComponent.prototype.getMessage = function () {
        return 'Пользователь ' + this.userInGroup.userName + ' добавлен в группу' + this.userInGroup.groupName + '!';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', useringroup_1.UserInGroup)
    ], UserInGroupEditComponent.prototype, "userInGroup", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserInGroupEditComponent.prototype, "groups", void 0);
    UserInGroupEditComponent = __decorate([
        core_1.Component({
            selector: 'useringroup-edit',
            templateUrl: 'app/useringroup/useringroup-edit.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [
                useringroup_service_1.UserInGroupService,
                group_service_1.GroupService
            ]
        }), 
        __metadata('design:paramtypes', [useringroup_service_1.UserInGroupService, group_service_1.GroupService, (typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _b) || Object, (typeof (_c = typeof ng2_toasty_1.ToastyService !== 'undefined' && ng2_toasty_1.ToastyService) === 'function' && _c) || Object])
    ], UserInGroupEditComponent);
    return UserInGroupEditComponent;
    var _a, _b, _c;
}());
exports.UserInGroupEditComponent = UserInGroupEditComponent;
//# sourceMappingURL=useringroup-edit.component.js.map