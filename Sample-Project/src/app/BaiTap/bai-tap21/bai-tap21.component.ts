import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogIn } from 'src/app/models/login';

@Component({
  selector: 'app-bai-tap21',
  templateUrl: './bai-tap21.component.html',
  styleUrls: ['./bai-tap21.component.css']
})
export class BaiTap21Component {
  public info = new LogIn();
  public loginFormGroup: FormGroup = new FormGroup({});

  public isSaved:boolean = false;
  constructor(private formBuilder: FormBuilder) {

    if(localStorage.getItem('info')){
      this.info = JSON.parse(localStorage.getItem('info') || '{}');}
  }
  ngOnInit(): void{


      this.loginFormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(5)])
      });



  }

  onSubmit(){
    this.info = new LogIn(this.loginFormGroup?.value.email, this.loginFormGroup?.value.password);
    if(this.isSaved){
      localStorage.setItem('info', JSON.stringify(this.info));
    }
    console.log(this.isSaved);

  }


}
