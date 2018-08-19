import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../providers/login.service";
import { SessionService } from "../../providers/session.service";
import { Alerts } from "../../enum/alerts.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  alert: any;

  constructor(private service: LoginService, private session: SessionService, private router: Router) {
    this.alert = new Object();
    this.alert.type = Alerts.SUCCESS;
    this.alert.show = false;
    this.alert.message = "";
    this.formLogin = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'password': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.formLogin.valid) {
      let user: any = this.formLogin.value;
      user.app = 'APP_BCK';
      this.service.mLogIn(user).subscribe(obj => {
        if (obj.sessionTokenBck) {
          this.session.setUser(obj);
          this.router.navigate(['/data']);
        } else {
          this.alert.type = Alerts.DANGER;
          this.alert.show = true;
          this.alert.message = obj.message;
        }
      }, error => console.log(error));
    } else {
      this.alert.type = Alerts.WARNING;
      this.alert.show = true;
      this.alert.message = "Complete el username y/o contraseña.";
    }
  }

}
