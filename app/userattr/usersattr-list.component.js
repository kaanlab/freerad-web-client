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
var userattr_service_1 = require('./userattr.service');
var UsersAttrListComponent = (function () {
    function UsersAttrListComponent(router, userAttrService) {
        this.router = router;
        this.userAttrService = userAttrService;
        this.loading = true;
    }
    UsersAttrListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAttrService.getUsersAttr()
            .then(function (userAttrs) { return _this.userAttrs = userAttrs; })
            .then(function (loading) { return _this.loading = false; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UsersAttrListComponent.prototype.goToNewUserAttr = function () {
        this.navigateToNewUserAttr();
    };
    UsersAttrListComponent.prototype.navigateToNewUserAttr = function () {
        this.router.navigateByUrl('/user/userattr/add');
    };
    UsersAttrListComponent = __decorate([
        core_1.Component({
            selector: 'usersattr-list',
            templateUrl: 'app/userattr/usersattr-list.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [userattr_service_1.UserAttrService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, userattr_service_1.UserAttrService])
    ], UsersAttrListComponent);
    return UsersAttrListComponent;
    var _a;
}());
exports.UsersAttrListComponent = UsersAttrListComponent;
//# sourceMappingURL=usersattr-list.component.js.map