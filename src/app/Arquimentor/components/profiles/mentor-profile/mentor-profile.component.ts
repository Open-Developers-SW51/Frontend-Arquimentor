import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MentorProfile} from "../../../model/mentor-profile";
import {MatTableDataSource} from "@angular/material/table";
import {MentorProfileService} from "../../../services/mentor-profile.service";
import {FileUploadService} from "../../../services/file-upload.service";

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {
  userProfile: MentorProfile | undefined;
  isEditing = false;
  dataSource: MatTableDataSource<any>;
  idRouter:Number | undefined;
  images: any = [];
  imagesC: any = [];
  urlImage: string | undefined;

  constructor(
    private mentorProfileService: MentorProfileService,
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService
  ) {
    this.dataSource = new MatTableDataSource<any>();
  }
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }
  ngOnInit(): void {
    const mentorId = this.route.snapshot.params['mentorProfileId'];
    this.getMentorProfileId(mentorId);
    this.idRouter=mentorId;
  }

  saveProfile(): void {

    this.isEditing = false;
    if (this.urlImage != undefined) {
      // @ts-ignore
      this.userProfile.userProfilePhoto = this.urlImage;
    }

    console.log("para subir "+ this.userProfile);
    this.mentorProfileService.update(this.userProfile?.id,this.userProfile).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((sp: MentorProfile) => {
          console.log(sp);
          alert("profile editado")
          return sp;
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  cancelEdit(): void {
    this.isEditing = false;
    // @ts-ignore
    this.mentorProfileService.getMentorProfileId(this.idRouter).subscribe((response: any) => {
      this.userProfile = response;
    });
  }

  private getMentorProfileId(mentorProfileId: number) {
    this.mentorProfileService.getMentorProfileId(mentorProfileId).subscribe((response: any) => {
      this.userProfile = response;
      console.log(this.userProfile);
    });
  }

  onFileSelected(event: any): void {
    let archivoCapturado = event.target.files;

    for (let i = 0; i < archivoCapturado.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(archivoCapturado[i]);

      reader.onloadend = () => {
        console.log(reader.result);
        this.images.push(reader.result);
        this.fileUploadService.submitImage(this.userProfile?.id + " " + Date.now(), reader.result).then(urlImage => {
          console.log(urlImage);
          // @ts-ignore
          this.urlImage = urlImage;
        });
      }
    }
  }

  onCertificatesSelect(event: any): void {
    let archivoCapturado = event.target.files;

    for (let i = 0; i < archivoCapturado.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(archivoCapturado[i]);
      reader.onloadend = () => {
        this.imagesC.push(reader.result);
        this.fileUploadService.submitImage(this.userProfile?.id + " " + Date.now(), reader.result).then(urlImage => {
          console.log(urlImage);
          // @ts-ignore
          this.userProfile?.certificates.push(urlImage);
        });
      }
    }
  }
}

