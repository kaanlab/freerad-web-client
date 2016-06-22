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
var nas_1 = require('./nas');
var nas_service_1 = require('./nas.service');
var NasAddComponent = (function () {
    function NasAddComponent(nasService, router, toastyService) {
        this.nasService = nasService;
        this.router = router;
        this.toastyService = toastyService;
        this.editMode = 'create';
        this.submitted = false;
        this.active = true;
    }
    NasAddComponent.prototype.ngOnInit = function () {
        this.nas = new nas_1.Nas();
    };
    NasAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    NasAddComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        this.nasService.addNas(this.nas)
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
    NasAddComponent.prototype.clearForm = function () {
        var _this = this;
        this.nas = new nas_1.Nas();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    NasAddComponent.prototype.goBack = function () {
        this.navigateBack();
    };
    NasAddComponent.prototype.navigateBack = function () {
        this.router.navigate(['NasesList']);
    };
    NasAddComponent.prototype.getMessage = function () {
        return 'Пользователь ' + this.nas.nasName + ' сохранен!';
    };
    NasAddComponent = __decorate([
        core_1.Component({
            selector: 'nas-add',
            templateUrl: 'app/nas/nas-add.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                common_1.NgClass,
                ng2_toasty_1.Toasty
            ],
            providers: [nas_service_1.NasService]
        }), 
        __metadata('design:paramtypes', [nas_service_1.NasService, router_deprecated_1.Router, ng2_toasty_1.ToastyService])
    ], NasAddComponent);
    return NasAddComponent;
}());
exports.NasAddComponent = NasAddComponent;
//# sourceMappingURL=nas-add.component.js.map