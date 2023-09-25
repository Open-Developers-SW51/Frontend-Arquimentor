import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from "../../interfaces/student";
import {Mentor} from "../../interfaces/mentor";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

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
