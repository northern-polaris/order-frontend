import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(public fb: FormBuilder,
              protected authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.loginForm.value);

    this.authService.postUser(serializedForm).subscribe(response => {
        this.snackBar.open('Shtimi u krye me sukses', 'close', {
          duration: 5000,
        });
        localStorage.setItem('token', response.token);
        console.log(response);

      },
      onError => {
        console.log(onError);
      }
    );
  }


}
