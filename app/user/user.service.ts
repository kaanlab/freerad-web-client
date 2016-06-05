import { Injectable, Component } from '@angular/core';
import { Http, Response, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Component({
    providers: [Http]
})

@Injectable()

export class UserService {
    
    private apiUrl = 'http://localhost:51164/api/users/';
    
    constructor(private http: Http){ }
    
    // Get all authors
    getUsers(): Observable<User[]> {
        return this.http.get(this.apiUrl)
                        .map(res => <User[]>res.json())
                        .catch(this.handleError);
    }
    
    getUser(id: number) {
        return this.getUsers()
            .map(users => users.find(user => user.id == id));
            
    }
    
    addUser(user: User): Observable<User> {

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .map(res => <User>res.json())
                        .catch(this.handleError);
        
    }
    
    // Handle errors
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        
        return Observable.throw(errMsg);
    }
}