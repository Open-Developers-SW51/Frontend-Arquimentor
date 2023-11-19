import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../../shared/services/base.service";
import {catchError, retry} from 'rxjs';
import {Publication} from "../model/publication";

@Injectable({
  providedIn: 'root'
})
export class ArquimentorService extends BaseService<Publication> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/publications';
  }
  getPublicationId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
