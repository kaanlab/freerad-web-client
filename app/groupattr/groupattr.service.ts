import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GroupAttr } from './groupattr';

@Injectable()
export class GroupAttrService {
    
    private apiUrl:string = 'http://localhost:51164/api/groupattributes';
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/groupattributes';
    
    constructor(private http: Http){ }
        
    // Get all authors
    getGroupsAttr(): Promise<GroupAttr[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getGroupAttr(id: number) {
        return this.getGroupsAttr()
            .then(groups => groups.find(group => group.id == id));
            
    }
    
    // Add new UserAttr
    addGroupAttr(groupAttr: GroupAttr) {
        let body = JSON.stringify(groupAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => groupAttr)
                        .catch(this.handleError);
        
    }

    // Update existing UserAttr
    editGroupAttr(groupAttr: GroupAttr) {
        let body = JSON.stringify(groupAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${groupAttr.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => groupAttr)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteGroupAttr(groupAttr: GroupAttr) {
        let body = JSON.stringify(groupAttr);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${groupAttr.id}`;

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