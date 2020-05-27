import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LayoutService{
    constructor(private http: HttpClient){}

    public loadLayoutControl(): Observable<Object>{
        const url = `../../assets/layout.json`;
        return this.http.get(url);
    }
}