import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postTitle: string="Title";
  isVisibilityOn: any;
  postDescription: string="postDescription";
  color: ThemePalette = "warn";
  checked = true;
  disabled = false;

  createPost() {

  }

  onImageSelected($event: Event) {

  }
}
