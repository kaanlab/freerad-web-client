import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Nas } from './nas';

@Injectable()
export class NasService {
    
    private apiUrl:string = 'http://localhost:51164/api/nases';
    //private apiUrl:string = 'http://web.adm.gov-rk.ru/freeradius/api/nases';

    constructor(private http: Http){ }
        
    // Get all authors
    getNases(): Promise<Nas[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json())                        
                        .catch(this.handleError);
    }
    
    getNas(id: number) {
        return this.getNases()
            .then(nases => nases.find(nas => nas.id == id));
            
    }
    
    // Add new User
    addNas(nas: Nas) {
        let body = JSON.stringify(nas);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(() => nas)
                        .catch(this.handleError);
        
    }

    // Update existing User
    editNas(nas: Nas) {
        let body = JSON.stringify(nas);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = `${this.apiUrl}/${nas.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(() => nas)
                        .catch(this.handleError);
    }
    
    // Delete existing User
    deleteNas(nas: Nas) {
        let body = JSON.stringify(nas);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.apiUrl}/${nas.id}`;

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