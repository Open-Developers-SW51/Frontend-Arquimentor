import {Mentor} from "./mentor";

export class Publication {
  id : number;
  title: string;
  description: string;
  image: string[];
  views: number;
  likes: number;
  mentor:Mentor;
  idMentor:number;

  constructor(
    id: number,
    title:string,
    description: string,
    image: string[],
    views: number,
    likes: number,
    mentor:Mentor,
    idMentor:number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.views = views;
    this.likes = likes;
    this.mentor = mentor;
    this.idMentor = idMentor;
  }

}
