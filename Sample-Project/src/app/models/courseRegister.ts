export class ICourseRegister{
  constructor(
    public name:string = '',
    public email:string = '',
    public phone:string = '',
    public course:string = '',
    public time:string = '',
    public agree:boolean = false
  ){}
}
