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
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var UserEditComponent = (function () {
    function UserEditComponent(userService, router, routeParams, toastyService) {
        this.userService = userService;
        this.router = router;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.user = new user_1.User();
        this.active = true;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userService.getUser(id).then(function (user) { return _this.user = user; });
    };
    UserEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserEditComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userService.editUser(this.user)
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
    UserEditComponent.prototype.clearForm = function () {
        var _this = this;
        this.user = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserEditComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['UsersList']);
    };
    UserEditComponent.prototype.getMessage = function () {
        return 'Данные пользователя ' + this.user.userName + ' успешно обновлены!';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserEditComponent.prototype, "user", void 0);
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'user-edit',
            templateUrl: 'app/user/user-edit.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map