import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArquimentorService } from "../../../services/arquimentor.service";
import { Mentor } from "../../../model/mentor";

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {
  userProfile: Mentor | undefined;
  isEditing = false;
  constructor(
    private profileService: ArquimentorService,
    private route: ActivatedRoute
  ) { }
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }
  ngOnInit(): void {
    const mentorId = this.route.snapshot.params['mentorId'];

  }

  saveProfile(): void {
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}

