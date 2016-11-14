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
var UserAttrDetailComponent = (function () {
    function UserAttrDetailComponent(userAttrService, routeParams, toastyService, router) {
        this.userAttrService = userAttrService;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.router = router;
        this.confirmDelete = false;
        this.userAttr = new userattr_1.UserAttr();
    }
    UserAttrDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userAttrService.getUserAttr(id)
            .then(function (userAttr) { return _this.userAttr = userAttr; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UserAttrDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.userAttrService.deleteUserAttr(this.userAttr)
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
    UserAttrDetailComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    UserAttrDetailComponent.prototype.onEdit = function () {
        var id = +this.routeParams.get('id');
        this.router.navigate(['UserAttrEdit', { id: id }]);
    };
    UserAttrDetailComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/user');
    };
    UserAttrDetailComponent.prototype.getMessage = function () {
        return 'Доп.атрибуты ' + this.userAttr.userName + ' удалены!';
    };
    UserAttrDetailComponent = __decorate([
        core_1.Component({
            selector: 'userattr-detail',
            templateUrl: 'app/userattr/userattr-detail.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [userattr_service_1.UserAttrService]
        }), 
        __metadata('design:paramtypes', [userattr_service_1.UserAttrService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof ng2_toasty_1.ToastyService !== 'undefined' && ng2_toasty_1.ToastyService) === 'function' && _b) || Object, (typeof (_c = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _c) || Object])
    ], UserAttrDetailComponent);
    return UserAttrDetailComponent;
    var _a, _b, _c;
}());
exports.UserAttrDetailComponent = UserAttrDetailComponent;
//# sourceMappingURL=userattr-detail.component.js.map