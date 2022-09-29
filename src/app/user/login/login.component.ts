import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.userService.login(f.value.email).subscribe(res => {
      console.log(res);

    })
  }
}
