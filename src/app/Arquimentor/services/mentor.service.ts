import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Mentor} from "../model/mentor";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MentorService extends BaseService<Mentor>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/mentors';
  }
  getMentorById(id: number): any {
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
