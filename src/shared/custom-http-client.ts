import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpClient {
    baseURL = "http://localhost:5250";
    constructor(private http: HttpClient) {       
    }

    get(url: string): Observable<any> {
        return this.http.get<any[]>(this.baseURL + url);
    }

    post(url: string, data: any,): Observable<any> {
        return this.http.post<any[]>(this.baseURL + url, data);
    }

    put(url: string, data: any,): Observable<any> {
        return this.http.put<any[]>(this.baseURL + url, data);
    }

    delete(url: string): Observable<any> {
        return this.http.delete<any[]>(this.baseURL + url);
    }
}