import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any;
  submitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submit() {
    this.submitting = true;
    console.log(this.form.value)
    if (this.form.valid) {
      this.authService.login({
        email: this.form.value.email,
        password: CryptoJS.AES.encrypt(this.form.value.password, 'lxgJMPRqhU').toString(),
      }).subscribe(
        response => {
          if (response?.success) {
            this.router.navigate(['/order-selection'])
          }
          else {
            console.log('No valido')
          }
        },
      )
    }
    else console.log('Campos erróneos');

  }

  get errorControl() {
    return this.form.controls;
  };

}
