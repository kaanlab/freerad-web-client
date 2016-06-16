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
var GroupAttrEditComponent = (function () {
    function GroupAttrEditComponent(groupAttrService, router, routeParams, toastyService) {
        this.groupAttrService = groupAttrService;
        this.router = router;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.groupAttr = new groupattr_1.GroupAttr();
        this.active = true;
    }
    GroupAttrEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.groupAttrService.getGroupAttr(id).then(function (groupAttr) { return _this.groupAttr = groupAttr; });
    };
    GroupAttrEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    GroupAttrEditComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.groupAttrService.editGroupAttr(this.groupAttr)
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
    GroupAttrEditComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    GroupAttrEditComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/group');
    };
    GroupAttrEditComponent.prototype.getMessage = function () {
        return 'Доп.атрибуты группы' + this.groupAttr.groupName + ' обновлены!';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', groupattr_1.GroupAttr)
    ], GroupAttrEditComponent.prototype, "groupAttr", void 0);
    GroupAttrEditComponent = __decorate([
        core_1.Component({
            selector: 'groupattr-edit',
            templateUrl: 'app/groupattr/groupattr-edit.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [groupattr_service_1.GroupAttrService]
        }), 
        __metadata('design:paramtypes', [groupattr_service_1.GroupAttrService, router_deprecated_1.Router, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService])
    ], GroupAttrEditComponent);
    return GroupAttrEditComponent;
}());
exports.GroupAttrEditComponent = GroupAttrEditComponent;
//# sourceMappingURL=groupattr-edit.component.js.map