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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var NasService = (function () {
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/nases';
    function NasService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:51164/api/nases';
    }
    // Get all authors
    NasService.prototype.getNases = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NasService.prototype.getNas = function (id) {
        return this.getNases()
            .then(function (nases) { return nases.find(function (nas) { return nas.id == id; }); });
    };
    // Add new User
    NasService.prototype.addNas = function (nas) {
        var body = JSON.stringify(nas);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl, body, options)
            .toPromise()
            .then(function () { return nas; })
            .catch(this.handleError);
    };
    // Update existing User
    NasService.prototype.editNas = function (nas) {
        var body = JSON.stringify(nas);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + nas.id;
        return this.http.put(url, body, options)
            .toPromise()
            .then(function () { return nas; })
            .catch(this.handleError);
    };
    // Delete existing User
    NasService.prototype.deleteNas = function (nas) {
        var body = JSON.stringify(nas);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + nas.id;
        return this.http.delete(url, { headers: headers, body: body })
            .toPromise()
            .catch(this.handleError);
    };
    // Handle errors
    NasService.prototype.handleError = function (error) {
        console.error('Error:', error); // log to console instead
        return Promise.reject(error.message || error);
    };
    NasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NasService);
    return NasService;
}());
exports.NasService = NasService;
//# sourceMappingURL=nas.service.js.map