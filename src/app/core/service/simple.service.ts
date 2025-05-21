import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class SimpleService {

    protected http: HttpClient;
    private baseUrl = `${environment.REST_URL}/`;

    protected options: {
        headers: HttpHeaders;
    } | any;

    protected opcoes: {
        headers: HttpHeaders;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
    } | any;

    constructor(
        http: HttpClient,
        options?: {
            headers: HttpHeaders;
        }
    ) {
        this.http = http;
        if (options === null) {
            this.options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        } else {
            this.options = options;
        }
    }

    get(
        url: string,
        params?: HttpParams,
        options?: { headers: HttpHeaders }
    ) {
        this.opcoes = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: params
        };
        return this.http.get(`${this.baseUrl}${url}`, this.opcoes).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    delete(
        url: string,
        params?: HttpParams,
        options?: { headers: HttpHeaders }
    ) {
        this.opcoes = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: params
        };
        return this.http.delete(`${this.baseUrl}${url}`, this.opcoes).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    put(t: any, urlComplemento?: string, params?: HttpParams, options?: { headers: HttpHeaders }) {
        this.resolveOpcoes(options);
        if (!!params) {
            if (this.opcoes === undefined) {
                this.opcoes = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                    params: params
                };
            } else {
                this.opcoes.params = params;
            }
        }
        const complemento = urlComplemento !== undefined ? urlComplemento : '';
        return this.http.put(this.baseUrl + complemento, t, this.opcoes).pipe(map(this.extractData),
            catchError(this.handleError));
    }

    patch(t: any, urlComplemento?: string, params?: HttpParams, options?: { headers: HttpHeaders }) {
        this.resolveOpcoes(options);

        if (!!params) {
            if (this.opcoes === undefined) {
                this.opcoes = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                    params: params
                };
            } else {
                this.opcoes.params = params;
            }
        }

        const complemento = urlComplemento !== undefined ? urlComplemento : '';

        return this.http.patch(this.baseUrl + complemento, t, this.opcoes).pipe(map(this.extractData),
            catchError(this.handleError));
    }

    post(data: any, url: string, options?: { headers: HttpHeaders }) {
        return this.http.post(`${ this.baseUrl }${ url }`, data, options).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    protected extractData(res: any) {
        const body = res || res.json() || '';
        return body;
    }

    protected handleError(error: any) {
        let msg = error.error;
        return throwError(msg);
    }

    private resolveOpcoes(options: any) {
        if (options === null) {
            this.opcoes = options;
        }
    }
}