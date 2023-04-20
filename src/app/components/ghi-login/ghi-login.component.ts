import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './validators/custom-validator';
import { LoginService } from './login.service';
import { throttle } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ghi-login',
  templateUrl: './ghi-login.component.html',
  styleUrls: ['./ghi-login.component.scss'],
})
export class GhiLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn!: false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router : Router) {}

  textStyles = {
    successColor: 'green',
    errorColor: 'red',
  };

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, CustomValidator.ValidateEmail]],
      password: ['', Validators.required],
    });
  }

  errors = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'invalidEmail', message: 'The email is not valid' },
    ],
    password: [{ type: 'required', message: 'password is required' }],
  };
  login() {
    const {email, password} = this.loginForm.value;
    if (this.loginService.login(email, password)) {
      this.router.navigate(['dashboard'])
    } 
  }
}
