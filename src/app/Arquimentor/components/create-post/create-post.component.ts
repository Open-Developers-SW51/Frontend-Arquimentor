import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ArquimentorService} from "../../services/arquimentor.service";
import {Publication} from "../../model/publication";
import {MatTableDataSource} from "@angular/material/table";
import {DomSanitizer} from "@angular/platform-browser";

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
  preview:string="";
  archivos: any=[];

  constructor(private arquimentorService: ArquimentorService,private sanitizer: DomSanitizer,) {
    this.publication = {} as Publication;
    this.dataSource = new MatTableDataSource<any>();
    this.publication.idMentor=1;
    this.publication.image=[];
  }

  createPublication():void {
    this.publication.id=0;
    console.log("antes de subir ",this.publication.image)
    this.publication.image=this.archivos;
    console.log("antes de subir archivo",this.publication.image)


    this.arquimentorService.create(this.publication).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data=this.dataSource.data.map((p:Publication)=>{
        console.log(p);
        return p;
      });
    },
    (error) => {
      console.error('Error en la solicitud:', error);
    }
    );
  }

  onFileSelected(event: any):void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen : any) =>{
      this.preview=imagen.base;
      console.log(imagen);
      this.publication.image=[archivoCapturado as string];
      console.log(this.publication.image);
    })
    this.archivos.push(archivoCapturado);

  }

  // @ts-ignore
  extraerBase64=async ($event: any)=> new Promise((resolve, reject)=>{
    try {
      const usafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(usafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = ()=>{
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error=>{
        resolve({
          base: null
        });
      };
    } catch (e){
      return null;
    }
  })
}
