import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    let email = f.value.email;
    this.userService
      .login()
      .subscribe((res) =>
        email !== res.email
          ? (this.message = 'Email Not Found')
          : (this.message = 'Email Successfully')
      );
  }
}
