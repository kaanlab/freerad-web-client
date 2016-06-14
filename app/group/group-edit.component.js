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
var group_1 = require('./group');
var group_service_1 = require('./group.service');
var GroupEditComponent = (function () {
    function GroupEditComponent(groupService, router, routeParams, toastyService) {
        this.groupService = groupService;
        this.router = router;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.group = new group_1.Group();
        this.active = true;
    }
    GroupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.groupService.getGroup(id).then(function (group) { return _this.group = group; });
    };
    GroupEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    GroupEditComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.groupService.editGroup(this.group)
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
    GroupEditComponent.prototype.clearForm = function () {
        var _this = this;
        this.group = new group_1.Group();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    GroupEditComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    GroupEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['GroupsList']);
    };
    GroupEditComponent.prototype.getMessage = function () {
        return 'Данные о группе ' + this.group.groupName + ' успешно обновлены!';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', group_1.Group)
    ], GroupEditComponent.prototype, "group", void 0);
    GroupEditComponent = __decorate([
        core_1.Component({
            selector: 'group-add',
            templateUrl: 'app/group/group-edit.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService, router_deprecated_1.Router, router_deprecated_1.RouteParams, ng2_toasty_1.ToastyService])
    ], GroupEditComponent);
    return GroupEditComponent;
}());
exports.GroupEditComponent = GroupEditComponent;
//# sourceMappingURL=group-edit.component.js.map