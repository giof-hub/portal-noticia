import { Injectable } from "@angular/core";
import { SimpleService } from "../../core/service/simple.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { APIS } from "../../core/apis.provider";
import { Result } from "../models/resul.model";

@Injectable({
    providedIn: 'root'
})
export class HomeService extends SimpleService {
    
    constructor (http: HttpClient) {
        super(http);
    }

    teste (): Observable<Result<any>> {
        return this.get(`${APIS.getUrl()}/teste`);
    }
}