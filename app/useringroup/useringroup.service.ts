import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserInGroup } from './useringroup';

@Injectable()
export class UserInGroupService {
    
    private apiUrl:string = 'http://localhost:51164/api/useringroups';
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/useringroups';
    
    constructor(private http: Http){ }
        
    // Get all authors
    getUsersInGroup(): Promise<UserInGroup[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getUserInGroup(id: number) {
        return this.getUsersInGroup()
            .then(usersInGroup => usersInGroup.find(userInGroup => userInGroup.id == id));
            
    }
    
    // Add new UserAttr
    addUserToGroup(userInGroup: UserInGroup) {
        let body = JSON.stringify(userInGroup);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => userInGroup)
                        .catch(this.handleError);
        
    }

    // Update existing UserAttr
    editUserInGroup(userInGroup: UserInGroup) {
        let body = JSON.stringify(userInGroup);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${userInGroup.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => userInGroup)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteUserFromGroup(userInGroup: UserInGroup) {
        let body = JSON.stringify(userInGroup);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${userInGroup.id}`;

        return this.http.delete(url, { headers: headers, body: body })
                        .toPromise()
                        .catch(this.handleError);
    }

    // Handle errors
    private handleError(error: any) {
        console.error('Error:', error); // log to console instead
        
        return Promise.reject(error.message || error);
    }
}