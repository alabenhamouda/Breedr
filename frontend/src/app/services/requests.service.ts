import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APINames} from "../constants/api-names";
import {Animal} from "../models/animal";
import {Observable} from "rxjs";
import {Request} from "../models/request";
import {Constants} from "../constants/Constants";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http : HttpClient) { }

  getBreedingRequests() : Observable<Request[]>{
    const url = `${Constants.API_URL}/breeding-request`;
    console.log(url);

    return this.http.get<Request[]>(url);
  }
}
