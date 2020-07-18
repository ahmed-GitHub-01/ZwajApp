import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authServices: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    this.authServices.login(this.model).subscribe(
      next => { console.log('تم الدخول بنجاح'); },
      error => { console.log('فشل فى الدخول'); }
    );
  }
}
