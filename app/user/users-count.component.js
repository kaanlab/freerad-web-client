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
var user_service_1 = require('./user.service');
var UsersCountComponent = (function () {
    function UsersCountComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    UsersCountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (users) { return _this.users = users; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    UsersCountComponent = __decorate([
        core_1.Component({
            selector: 'users-count',
            template: "\n        <span class=\"badge\" *ngFor=\"let user of users\">\n            {{ users.length }}\n        </span>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService])
    ], UsersCountComponent);
    return UsersCountComponent;
}());
exports.UsersCountComponent = UsersCountComponent;
//# sourceMappingURL=users-count.component.js.map