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
var group_1 = require('./group');
var group_service_1 = require('./group.service');
var GroupDetailComponent = (function () {
    function GroupDetailComponent(groupService, routeParams, toastyService, router) {
        this.groupService = groupService;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.router = router;
        this.confirmDelete = false;
        this.group = new group_1.Group();
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.groupService.getGroup(id).then(function (group) { return _this.group = group; });
    };
    GroupDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.groupService.deleteGroup(this.group)
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
    GroupDetailComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    GroupDetailComponent.prototype.onEdit = function () {
        var id = +this.routeParams.get('id');
        this.router.navigate(['GroupEdit', { id: id }]);
    };
    GroupDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['GroupsList']);
    };
    GroupDetailComponent.prototype.getMessage = function () {
        return 'Группа ' + this.group.groupName + ' удалена!';
    };
    GroupDetailComponent = __decorate([
        core_1.Component({
            selector: 'group-detail',
            templateUrl: 'app/group/group-detail.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService, router_deprecated_1.Router])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());
exports.GroupDetailComponent = GroupDetailComponent;
//# sourceMappingURL=group-detail.component.js.map