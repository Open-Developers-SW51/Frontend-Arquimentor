import {Student} from "./student";

export class Mentor {
  name: string;
  nick: string;
  photo: string;
  cellphone: string;
  email: string;
  slogan: string;
  student: Student;

  constructor(
      name: string,
      nick:string,
      photo: string,
      cellphone: string,
      email: string,
      slogan: string,
      student: Student
  ) {
    this.name = name;
    this.nick = nick;
    this.photo = photo;
    this.cellphone = cellphone;
    this.email = email;
    this.slogan = slogan;
    this.student = student;
  }
}
