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
var groupattr_1 = require('./groupattr');
var groupattr_service_1 = require('./groupattr.service');
var GroupAttrDetailComponent = (function () {
    function GroupAttrDetailComponent(groupAttrService, routeParams, toastyService, router) {
        this.groupAttrService = groupAttrService;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.router = router;
        this.confirmDelete = false;
        this.groupAttr = new groupattr_1.GroupAttr();
    }
    GroupAttrDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.groupAttrService.getGroupAttr(id).then(function (groupAttr) { return _this.groupAttr = groupAttr; });
    };
    GroupAttrDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.groupAttrService.deleteGroupAttr(this.groupAttr)
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
    GroupAttrDetailComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    GroupAttrDetailComponent.prototype.onEdit = function () {
        var id = +this.routeParams.get('id');
        this.router.navigate(['GroupAttrEdit', { id: id }]);
    };
    GroupAttrDetailComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/group');
    };
    GroupAttrDetailComponent.prototype.getMessage = function () {
        return 'Доп.атрибуты группы ' + this.groupAttr.groupName + ' удалены!';
    };
    GroupAttrDetailComponent = __decorate([
        core_1.Component({
            selector: 'groupattr-detail',
            templateUrl: 'app/groupattr/groupattr-detail.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [groupattr_service_1.GroupAttrService]
        }), 
        __metadata('design:paramtypes', [groupattr_service_1.GroupAttrService, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService, router_deprecated_1.Router])
    ], GroupAttrDetailComponent);
    return GroupAttrDetailComponent;
}());
exports.GroupAttrDetailComponent = GroupAttrDetailComponent;
//# sourceMappingURL=groupattr-detail.component.js.map