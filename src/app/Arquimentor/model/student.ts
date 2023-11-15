export class Student {
  studentName: string;
  nick:string;
  photo: string;
  cellphone: string;
  email: string;
  slogan: string;

  constructor(
    studentName: string,
      nick:string,
      photo: string,
      cellphone: string,
      email: string,
      slogan: string
  ) {
    this.studentName = studentName;
    this.nick = nick;
    this.photo = photo;
    this.cellphone = cellphone;
    this.email = email;
    this.slogan = slogan;
  }
}
