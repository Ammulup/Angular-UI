import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class UserLoginComponent implements OnInit{
    signupUsers: any[] = [];
    signupObj:any = {
        userName:'',
        email:'',
        password:''
    };
    loginObj: any = {
        userName:'',
        password:''
    }
    constructor(){}
    ngOnInit(): void{

    }
    onSignUp()
    {

    }
    onLogin()
    {
        this.signupUsers.push(this.signupObj)
        localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    }
  title = 'my-first-angular-project';
}
