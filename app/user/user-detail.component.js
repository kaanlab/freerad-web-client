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
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, routeParams, router) {
        this.userService = userService;
        this.routeParams = routeParams;
        this.router = router;
        this.user = new user_1.User();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.userService.getUser(id).then(function (user) { return _this.user = user; });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            templateUrl: 'app/user/user-detail.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map