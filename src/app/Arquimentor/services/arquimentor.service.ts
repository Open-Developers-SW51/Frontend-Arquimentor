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


  getStudentProfileById(studentId: string): Observable<Student> {
    const url = `${this.apiUrl}/students/${studentId}`;
    return this.http.get<Student>(url);
  }
  getMentorProfileById(mentorId: string): Observable<Mentor> {
    const url = `${this.apiUrl}/mentors/${mentorId}`;
    return this.http.get<Mentor>(url);
  }
  updateMentorProfile(mentorId: string, updatedProfile: Mentor): Observable<void> {
    const url = `${this.apiUrl}/mentors/${mentorId}`;
    return this.http.put<void>(url, updatedProfile);
  }



}
