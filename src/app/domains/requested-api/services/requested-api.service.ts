import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { environment } from "../../../../environments/environment";
import { RequestedAPI } from "../models/requested-api";

@Injectable()
export class RequestedAPIService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<RequestedAPI[]> {
        return this.httpClient.get<RequestedAPI[]>(environment.MY_APPS);
    }

    head(url: string): Observable<any> {
        return this.httpClient.head(url);
    }
}