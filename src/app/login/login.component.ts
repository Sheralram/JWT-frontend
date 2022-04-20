import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm !: FormGroup;
  //  public formGroup !: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private authService : AuthServiceService
  ) { }

  ngOnInit(): void {
  //   this.inItForm();
  //  }
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }
    // inItForm(){
    // this.formGroup = new FormGroup({
    //   username: new FormControl(['', Validators.required]),
    //   password: new FormControl(['', Validators.required])
    // })

    // }


    login(){
      console.log("hello");
      // console.log(this.loginForm.value)
  
      return this.http.get<any>("")
    .subscribe(res=>{
      const user = res.find((a : any)=>{
       return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password  
      });
      if (user){
        alert("Login Success");
        this.router.navigate(['dashboard'])
        // this.toast.success({detail:"SUCCESS",summary:'Login Successfully!!!',duration:1000});
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        alert("user not found");
       // this.toast.error({detail:"ERROR",summary:'User Not Found',sticky:true});
  
      }
    },error=>{
      //  alert("something went wrong")
      //  this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
    
      })
      
  
    }
   // this.router.navigate(['dashboard']);



    // loginProcess(){
    //   if(this.formGroup.valid){
    //     this.authService.login(this.formGroup.value).subscribe(result=>{
    //       if(result.success){
    //         console.log(result);
    //         alert(result.message);
    //       }else{
    //         alert(result.message);
    //       }
    //     }) ;  
    //      }
    // }




 


}
