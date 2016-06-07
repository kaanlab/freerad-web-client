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
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var UserAddComponent = (function () {
    function UserAddComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.editMode = 'create';
        this.submitted = false;
        this.active = true;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    UserAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserAddComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userService.addUser(this.user)
            .then(function () { return _this.goBack(); })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserAddComponent.prototype.clearForm = function () {
        var _this = this;
        this.user = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserAddComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserAddComponent.prototype.navigateBack = function () {
        this.router.navigate(['UsersList']);
    };
    UserAddComponent = __decorate([
        core_1.Component({
            selector: 'user-add',
            templateUrl: 'app/user/user-add.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router])
    ], UserAddComponent);
    return UserAddComponent;
}());
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=user-add.component.js.map