import { Injectable } from "@angular/core";
import { SimpleService } from "../core/service/simple.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APIS } from "../core/apis.provider";
import { Result } from "../models/result.model";
import { Category } from "../models/category.model";

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

    categories(): Observable<Result<Category[]>> {

        let categories: Category[] = [
            { id: 1, descricao: 'Geral' }, 
            { id: 2, descricao: 'Esportes' },
            { id: 3, descricao: 'Empregos' }
        ]

        let result: Result<Category[]> = {
            result: categories
        }

        return of(result);
        // return this.get(`${APIS.getUrl()}/category`);
    }

    login(email: string, senha: string): Observable<Result<string>> {

        let data = {
            email: email,
            senha: senha
        };

        return this.post(data, `${APIS.getUrl()}/login`);
    }
}