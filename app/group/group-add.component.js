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
var GroupAddComponent = (function () {
    function GroupAddComponent(groupService, router, toastyService) {
        this.groupService = groupService;
        this.router = router;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.active = true;
    }
    GroupAddComponent.prototype.ngOnInit = function () {
        this.group = new group_1.Group();
    };
    GroupAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    GroupAddComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.groupService.addGroup(this.group)
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
    GroupAddComponent.prototype.clearForm = function () {
        var _this = this;
        this.group = new group_1.Group();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    GroupAddComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    GroupAddComponent.prototype.navigateBack = function () {
        this.router.navigate(['GroupsList']);
    };
    GroupAddComponent.prototype.getMessage = function () {
        return 'Группа ' + this.group.groupName + ' сохранена!';
    };
    GroupAddComponent = __decorate([
        core_1.Component({
            selector: 'group-add',
            templateUrl: 'app/group/group-add.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService, router_deprecated_1.Router, ng2_toasty_1.ToastyService])
    ], GroupAddComponent);
    return GroupAddComponent;
}());
exports.GroupAddComponent = GroupAddComponent;
//# sourceMappingURL=group-add.component.js.map