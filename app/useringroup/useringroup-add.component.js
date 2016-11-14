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
var user_service_1 = require('../user/user.service');
var group_service_1 = require('../group/group.service');
var UserInGroupAddComponent = (function () {
    function UserInGroupAddComponent(userInGroupService, userService, groupService, router, toastyService) {
        this.userInGroupService = userInGroupService;
        this.userService = userService;
        this.groupService = groupService;
        this.router = router;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.active = true;
    }
    UserInGroupAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInGroup = new useringroup_1.UserInGroup();
        this.userService.getUsers()
            .then(function (users) { return _this.users = users; })
            .catch(function (error) { return _this.errorMessage = error; });
        this.groupService.getGroups()
            .then(function (groups) { return _this.groups = groups; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserInGroupAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserInGroupAddComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userInGroupService.addUserToGroup(this.userInGroup)
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
    UserInGroupAddComponent.prototype.clearForm = function () {
        var _this = this;
        this.userInGroup = new useringroup_1.UserInGroup();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserInGroupAddComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserInGroupAddComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/user');
    };
    UserInGroupAddComponent.prototype.getMessage = function () {
        return 'Пользователь ' + this.userInGroup.userName + ' добавлен в группу ' + this.userInGroup.groupName + '!';
    };
    UserInGroupAddComponent = __decorate([
        core_1.Component({
            selector: 'useringroup-add',
            templateUrl: 'app/useringroup/useringroup-add.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [
                useringroup_service_1.UserInGroupService,
                user_service_1.UserService,
                group_service_1.GroupService
            ]
        }), 
        __metadata('design:paramtypes', [useringroup_service_1.UserInGroupService, user_service_1.UserService, group_service_1.GroupService, (typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof ng2_toasty_1.ToastyService !== 'undefined' && ng2_toasty_1.ToastyService) === 'function' && _b) || Object])
    ], UserInGroupAddComponent);
    return UserInGroupAddComponent;
    var _a, _b;
}());
exports.UserInGroupAddComponent = UserInGroupAddComponent;
//# sourceMappingURL=useringroup-add.component.js.map