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
var common_1 = require('@angular/common');
var ng2_toasty_1 = require('ng2-toasty/ng2-toasty');
var userattr_1 = require('./userattr');
var userattr_service_1 = require('./userattr.service');
var UserAttrEditComponent = (function () {
    function UserAttrEditComponent(userAttrService, router, routeParams, toastyService) {
        this.userAttrService = userAttrService;
        this.router = router;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.userAttr = new userattr_1.UserAttr();
        this.active = true;
    }
    UserAttrEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userAttrService.getUserAttr(id).then(function (userAttr) { return _this.userAttr = userAttr; });
    };
    UserAttrEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserAttrEditComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.userAttrService.editUserAttr(this.userAttr)
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
    UserAttrEditComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserAttrEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['UsersAttrList']);
    };
    UserAttrEditComponent.prototype.getMessage = function () {
        return 'Данные пользователя ' + this.userAttr.userName + ' успешно обновлены!';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', userattr_1.UserAttr)
    ], UserAttrEditComponent.prototype, "userAttr", void 0);
    UserAttrEditComponent = __decorate([
        core_1.Component({
            selector: 'userattr-add',
            templateUrl: 'app/userattr/userattr-edit.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [userattr_service_1.UserAttrService]
        }), 
        __metadata('design:paramtypes', [userattr_service_1.UserAttrService, router_deprecated_1.Router, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService])
    ], UserAttrEditComponent);
    return UserAttrEditComponent;
}());
exports.UserAttrEditComponent = UserAttrEditComponent;
//# sourceMappingURL=userattr-edit.component.js.map