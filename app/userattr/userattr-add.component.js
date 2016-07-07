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
var userattr_1 = require('./userattr');
var userattr_service_1 = require('./userattr.service');
var user_service_1 = require('../user/user.service');
var UserAttrAddComponent = (function () {
    function UserAttrAddComponent(userAttrService, userService, router, toastyService) {
        this.userAttrService = userAttrService;
        this.userService = userService;
        this.router = router;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.active = true;
    }
    UserAttrAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAttr = new userattr_1.UserAttr();
        this.userService.getUsers()
            .then(function (users) { return _this.users = users; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserAttrAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserAttrAddComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userAttrService.addUserAttr(this.userAttr)
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
    UserAttrAddComponent.prototype.clearForm = function () {
        var _this = this;
        this.userAttr = new userattr_1.UserAttr();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserAttrAddComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserAttrAddComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/user');
    };
    UserAttrAddComponent.prototype.getMessage = function () {
        return 'Доп.атрибуты ' + this.userAttr.userName + ' сохранены!';
    };
    UserAttrAddComponent = __decorate([
        core_1.Component({
            selector: 'userattr-add',
            templateUrl: 'app/userattr/userattr-add.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [
                userattr_service_1.UserAttrService,
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [userattr_service_1.UserAttrService, user_service_1.UserService, router_deprecated_1.Router, ng2_toasty_1.ToastyService])
    ], UserAttrAddComponent);
    return UserAttrAddComponent;
}());
exports.UserAttrAddComponent = UserAttrAddComponent;
//# sourceMappingURL=userattr-add.component.js.map