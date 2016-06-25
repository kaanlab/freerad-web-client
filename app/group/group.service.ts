import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Group } from './group';

@Injectable()
export class GroupService {
    
    private apiUrl:string = 'http://localhost:51164/api/groups';
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/groups';
    
    constructor(private http: Http){ }
        
    // Get all authors
    getGroups(): Promise<Group[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getGroup(id: number) {
        return this.getGroups()
            .then(groups => groups.find(group => group.id == id));
            
    }
    
    // Add new Group
    addGroup(group: Group) {
        let body = JSON.stringify(group);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => group)
                        .catch(this.handleError);
        
    }

    // Update existing Group
    editGroup(group: Group) {
        let body = JSON.stringify(group);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${group.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => group)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteGroup(group: Group) {
        let body = JSON.stringify(group);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${group.id}`;

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