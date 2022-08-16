import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  form: FormGroup | undefined;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]

    });
  }

  /**
   * Method used for submit.
   * @memberof LoginFormComponent
   */
  submit() {
    this.router.navigate(['/Home']);
  }


}
