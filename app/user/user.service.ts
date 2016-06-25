import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
    
    private apiUrl:string = 'http://localhost:51164/api/users';
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/users';
    
    constructor(private http: Http){ }
        
    // Get all authors
    getUsers(): Promise<User[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getUser(id: number) {
        return this.getUsers()
            .then(users => users.find(user => user.id == id));
            
    }
    
    // Add new User
    addUser(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => user)
                        .catch(this.handleError);
        
    }

    // Update existing User
    editUser(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${user.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => user)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteUser(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${user.id}`;

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