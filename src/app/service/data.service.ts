import { Injectable, Component } from '@angular/core'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import {abc} from '../../assets/config';
import { stringify } from 'querystring';

@Injectable()

export class DataService{
    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    json = {
        name: "ExampleClass",
        mainId: 42,
        firstMember: {
            name: "Member",
            id: 1337
        },
        secondMember: {
            name: "Member",
            id: -1
        }
    };
    jsonConfig = '.../../assets/config';

    constructor(private http: HttpClient){}

    changeMessage(message: string){
        this.messageSource.next(message)
    }

    getData(){
        return this.http.get(this.jsonConfig,  {
            responseType: 'json'
        });
    }

    get(){
        return this.getData();
    }

}
