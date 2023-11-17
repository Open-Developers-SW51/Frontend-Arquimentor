import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../../shared/services/base.service";
import {catchError, Observable, retry} from 'rxjs';
import {Publication} from "../model/publication";
import {Mentor} from "../model/mentor";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class ArquimentorService extends BaseService<Publication> {
  private apiUrl: any;
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/publications';
  }

}
