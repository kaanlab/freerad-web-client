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
var platform_browser_1 = require('@angular/platform-browser');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var users_component_1 = require('./user/users.component');
var groups_component_1 = require('./group/groups.component');
var nases_component_1 = require('./nas/nases.component');
var AppComponent = (function () {
    function AppComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    AppComponent.prototype.isCurrentRoute = function (route) {
        var instruction = this.router.generate(route);
        return this.router.isRouteActive(instruction);
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.title.setTitle(newTitle);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/dashborard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/user/...', name: 'Users', component: users_component_1.UsersComponent },
            { path: '/group/...', name: 'Groups', component: groups_component_1.GroupsComponent },
            { path: '/nas/...', name: 'Nases', component: nases_component_1.NasesComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map