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
var nas_1 = require('./nas');
var nas_service_1 = require('./nas.service');
var NasDetailComponent = (function () {
    function NasDetailComponent(nasService, routeParams, toastyService, router) {
        this.nasService = nasService;
        this.routeParams = routeParams;
        this.toastyService = toastyService;
        this.router = router;
        this.confirmDelete = false;
        this.nas = new nas_1.Nas();
    }
    NasDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.nasService.getNas(id).then(function (nas) { return _this.nas = nas; });
    };
    NasDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.nasService.deleteNas(this.nas)
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
    NasDetailComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    NasDetailComponent.prototype.onEdit = function () {
        var id = +this.routeParams.get('id');
        this.router.navigate(['NasEdit', { id: id }]);
    };
    NasDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['NasesList']);
    };
    NasDetailComponent.prototype.getMessage = function () {
        return 'Устройство ' + this.nas.shortName + ' удалено!';
    };
    NasDetailComponent = __decorate([
        core_1.Component({
            selector: 'nas-detail',
            templateUrl: 'app/nas/nas-detail.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                ng2_toasty_1.Toasty
            ],
            providers: [nas_service_1.NasService]
        }), 
        __metadata('design:paramtypes', [nas_service_1.NasService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof ng2_toasty_1.ToastyService !== 'undefined' && ng2_toasty_1.ToastyService) === 'function' && _b) || Object, (typeof (_c = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _c) || Object])
    ], NasDetailComponent);
    return NasDetailComponent;
    var _a, _b, _c;
}());
exports.NasDetailComponent = NasDetailComponent;
//# sourceMappingURL=nas-detail.component.js.map