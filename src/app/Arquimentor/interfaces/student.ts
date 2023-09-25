export class Student {
  name: string;
  nick:string;
  photo: string;
  cellphone: string;
  email: string;
  slogan: string;

  constructor(
      name: string,
      nick:string,
      photo: string,
      cellphone: string,
      email: string,
      slogan: string
  ) {
    this.name = name;
    this.nick = nick;
    this.photo = photo;
    this.cellphone = cellphone;
    this.email = email;
    this.slogan = slogan;
  }
}
