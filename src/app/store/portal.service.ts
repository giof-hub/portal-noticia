import { Injectable } from "@angular/core";
import { SimpleService } from "../core/service/simple.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APIS } from "../core/apis.provider";
import { Result } from "../models/result.model";
import { Category } from "../models/category.model";
import { Login } from "../models/login.model";
import { Menu } from "../models/menu.model";

@Injectable({
    providedIn: 'root'
})
export class Service extends SimpleService {
    
    constructor (http: HttpClient) {
        super(http);
    }

    teste (): Observable<Result<any>> {
        return this.get(`${APIS.getUrl()}/teste`);
    }

    categories(): Observable<Result<Menu[]>> {
        return this.get(`${APIS.getUrl()}/category`);
    }

    login(data: Login): Observable<Result<string>> {
        return this.post(data, `${APIS.getUrl()}/auth/login`);
    }
}