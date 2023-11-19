import {Component, OnInit} from '@angular/core';
import {ArquimentorService} from "../../services/arquimentor.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {Publication} from "../../model/publication";
@Component({
  selector: 'app-publication-id',
  templateUrl: './publication-id.component.html',
  styleUrls: ['./publication-id.component.css']
})

export class PublicationIdComponent implements OnInit{
  publication: Publication | undefined;
  liked: boolean = false;
  linkCount:number | undefined=0;
  viewCount:number | undefined=0;

  constructor(    private arquimentorService: ArquimentorService,
                  private route: ActivatedRoute,private router: Router,private location: Location) {
  }

  ngOnInit(): void {
    const publicationId = this.route.snapshot.params['publicationId'];
    this.arquimentorService.incrementView(publicationId).subscribe();
    this.getIdPublication(publicationId);
    const userLiked = localStorage.getItem('userLiked'+publicationId);
    this.liked = userLiked === 'true';
  }

  private getIdPublication(publicationId: number) {
    this.arquimentorService.getPublicationId(publicationId).subscribe((response: any) => {
      this.publication = response;
      console.log(this.publication);
      this.linkCount= this.publication?.likes;
      this.viewCount= this.publication?.views;
      // @ts-ignore
      this.viewCount= this.viewCount+1;
    });
  }

  back() {
    const rutaAnterior = this.location.path();
    console.log('Ruta anterior:', rutaAnterior);
    this.router.navigate(['home']);
  }

  deletePublication() {
    const id = this.route.snapshot.params['publicationId'];
    this.arquimentorService.delete(id).subscribe(
      response => {
        console.log('Recurso eliminado con éxito', response);
      },
      error => {
        console.error('Error al eliminar el recurso', error);
      });
    this.router.navigate(['/']);
    alert("post with id "+id+" deleted")
  }

  incrementLike() {
    if(!this.liked){
      const id = this.route.snapshot.params['publicationId'];
      this.arquimentorService.incrementLike(id).subscribe(
        response => {
          console.log('increment like', response);
        },
        error => {
          console.error('not increment like', error);
        });
      localStorage.setItem('userLiked'+id, 'true');
      this.liked = true;
      // @ts-ignore
      this.linkCount= this.linkCount+1;
    }
  }

  discountLike() {
    if(this.liked){
      const id = this.route.snapshot.params['publicationId'];
      this.arquimentorService.discountLike(id).subscribe(
        response => {
          console.log('discount like', response);
        },
        error => {
          console.error('not discount like', error);
        });
      localStorage.setItem('userLiked'+id, 'false');
      this.liked = false;
      // @ts-ignore
      this.linkCount= this.linkCount-1;
    }
  }

  OpenModal() {
    const modal=document.querySelector("#modal");
      // @ts-ignore
      modal.showModal();
  }

  routerAppointment() {
    const url = this.router.url;
    this.router.navigate(['/appointment'],{ queryParams: { currentUrl: url } });
  }
}
