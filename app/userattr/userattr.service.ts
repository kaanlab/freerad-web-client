import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserAttr } from './userattr';

@Injectable()
export class UserAttrService {
    
    private apiUrl:string = 'http://localhost:51164/api/userattributes';
    
    constructor(private http: Http){ }
        
    // Get all authors
    getUsersAttr(): Promise<UserAttr[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getUserAttr(id: number) {
        return this.getUsersAttr()
            .then(users => users.find(user => user.id == id));
            
    }
    
    // Add new UserAttr
    addUserAttr(userAttr: UserAttr) {
        let body = JSON.stringify(userAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => userAttr)
                        .catch(this.handleError);
        
    }

    // Update existing UserAttr
    editUserAttr(userAttr: UserAttr) {
        let body = JSON.stringify(userAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${userAttr.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => userAttr)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteUserAttr(userAttr: UserAttr) {
        let body = JSON.stringify(userAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${userAttr.id}`;

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