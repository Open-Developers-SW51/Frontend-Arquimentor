import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ArquimentorService} from "../../services/arquimentor.service";
import {Publication} from "../../model/publication";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {FileUploadService} from "../../services/file-upload.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  isVisibilityOn: any;
  color: ThemePalette = "warn";
  checked = true;
  disabled = false;
  dataSource: MatTableDataSource<any>;
  publication: Publication;
  //imagen
  images: any = [];

  constructor(private arquimentorService: ArquimentorService, private router: Router, private fileUploadService: FileUploadService) {
    this.publication = {} as Publication;
    this.dataSource = new MatTableDataSource<any>();
    this.publication.mentorProfileId = 1;
    this.publication.image = [];
  }

  createPublication(): void {
    this.publication.id = 0;
    this.arquimentorService.create(this.publication).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((p: Publication) => {
          console.log(p);
          alert("post created")
          this.router.navigate(['/']);
          return p;

        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    let archivoCapturado = event.target.files;

    for (let i = 0; i < archivoCapturado.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(archivoCapturado[0]);

      reader.onloadend = () => {
        console.log(reader.result);
        this.images.push(reader.result);
        this.fileUploadService.submitImage(this.publication.id + " " + Date.now(), reader.result).then(urlImage => {
          console.log(urlImage);
          //asociar de una vez la imagen al post
            // @ts-ignore
          this.publication.image.push(urlImage);
        });
      }
    }
  }
}
