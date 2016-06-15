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
var UserAttrService = (function () {
    function UserAttrService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:51164/api/userattributes';
    }
    // Get all authors
    UserAttrService.prototype.getUsersAttr = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserAttrService.prototype.getUserAttr = function (id) {
        return this.getUsersAttr()
            .then(function (users) { return users.find(function (user) { return user.id == id; }); });
    };
    // Add new UserAttr
    UserAttrService.prototype.addUserAttr = function (userAttr) {
        var body = JSON.stringify(userAttr);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl, body, options)
            .toPromise()
            .then(function () { return userAttr; })
            .catch(this.handleError);
    };
    // Update existing UserAttr
    UserAttrService.prototype.editUserAttr = function (userAttr) {
        var body = JSON.stringify(userAttr);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + userAttr.id;
        return this.http.put(url, body, options)
            .toPromise()
            .then(function () { return userAttr; })
            .catch(this.handleError);
    };
    // Delete existing User
    UserAttrService.prototype.deleteUserAttr = function (userAttr) {
        var body = JSON.stringify(userAttr);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + userAttr.id;
        return this.http.delete(url, { headers: headers, body: body })
            .toPromise()
            .catch(this.handleError);
    };
    // Handle errors
    UserAttrService.prototype.handleError = function (error) {
        console.error('Error:', error); // log to console instead
        return Promise.reject(error.message || error);
    };
    UserAttrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserAttrService);
    return UserAttrService;
}());
exports.UserAttrService = UserAttrService;
//# sourceMappingURL=userattr.service.js.map