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
var nas_service_1 = require('./nas.service');
var NasesListComponent = (function () {
    function NasesListComponent(router, nasService) {
        this.router = router;
        this.nasService = nasService;
        this.loading = true;
    }
    NasesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasService.getNases()
            .then(function (nases) { return _this.nases = nases; })
            .then(function (loading) { return _this.loading = false; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    NasesListComponent.prototype.goToNewNas = function () {
        this.navigateToNewNas();
    };
    NasesListComponent.prototype.navigateToNewNas = function () {
        this.router.navigate(['NasAdd']);
    };
    NasesListComponent = __decorate([
        core_1.Component({
            selector: 'nases-list',
            templateUrl: 'app/nas/nases-list.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [nas_service_1.NasService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, nas_service_1.NasService])
    ], NasesListComponent);
    return NasesListComponent;
    var _a;
}());
exports.NasesListComponent = NasesListComponent;
//# sourceMappingURL=nases-list.component.js.map