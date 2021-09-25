export class Todo {
  public sno: number;
  public title: string;
  public desc: string;
  public active: boolean;
  constructor(sno: number, title: string, desc: string, active: boolean) {
    this.sno = sno;
    this.title = title;
    this.desc = desc;
    this.active = active;
  }
}
