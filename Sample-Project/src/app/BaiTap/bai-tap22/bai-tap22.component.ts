import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourseRegister } from 'src/app/models/courseRegister';

@Component({
  selector: 'app-bai-tap22',
  templateUrl: './bai-tap22.component.html',
  styleUrls: ['./bai-tap22.component.css']
})
export class BaiTap22Component implements OnInit{
  public formGroup: FormGroup = new FormGroup({});
  public courses = ['Ruby','Python','Java','C#','C++','PHP','Javascript','Typescript','Angular','React','Vue','NodeJS','Django','Laravel','Spring','ASP.NET']
  public courseRegister: ICourseRegister = new ICourseRegister();

  constructor(private fb: FormBuilder) {
    }
    ngOnInit(): void {
      this.formGroup = this.fb.group({
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$')]),
      course: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
      agree: new FormControl('',Validators.requiredTrue),
    })

    console.log(this.courseRegister);

  }
  onSubmit() {
    this.courseRegister = this.formGroup.value;
    console.log(this.courseRegister);

  }
}
