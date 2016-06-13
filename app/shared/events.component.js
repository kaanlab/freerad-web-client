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
var ng2_toasty_1 = require('ng2-toasty/ng2-toasty');
var user_add_component_1 = require('../user/user-add.component');
var EventsComponent = (function () {
    function EventsComponent(toastyService) {
        this.toastyService = toastyService;
    }
    EventsComponent.prototype.onNotify = function (message) {
        alert(message);
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            template: "\n        \n        <ng2-toasty></ng2-toasty>\n    ",
            directives: [
                ng2_toasty_1.Toasty,
                user_add_component_1.UserAddComponent
            ]
        }), 
        __metadata('design:paramtypes', [ng2_toasty_1.ToastyService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map