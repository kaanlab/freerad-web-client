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
var groupattr_service_1 = require('./groupattr.service');
var GroupsAttrListComponent = (function () {
    function GroupsAttrListComponent(router, groupAttrService) {
        this.router = router;
        this.groupAttrService = groupAttrService;
        this.loading = true;
    }
    GroupsAttrListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupAttrService.getGroupsAttr()
            .then(function (groupAttrs) { return _this.groupAttrs = groupAttrs; })
            .then(function (loading) { return _this.loading = false; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    GroupsAttrListComponent.prototype.goToNewGroupAttr = function () {
        this.navigateToNewGroupAttr();
    };
    GroupsAttrListComponent.prototype.navigateToNewGroupAttr = function () {
        this.router.navigateByUrl('/group/groupattr/add');
    };
    GroupsAttrListComponent = __decorate([
        core_1.Component({
            selector: 'groupsattr-list',
            templateUrl: 'app/groupattr/groupsattr-list.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [groupattr_service_1.GroupAttrService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, groupattr_service_1.GroupAttrService])
    ], GroupsAttrListComponent);
    return GroupsAttrListComponent;
    var _a;
}());
exports.GroupsAttrListComponent = GroupsAttrListComponent;
//# sourceMappingURL=groupsattr-list.component.js.map