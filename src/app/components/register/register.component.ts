import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();
 
  constructor(private userService: UserService, private router: Router) { }
 
  register() {
    this.userService.register(this.user).subscribe(response => {
      console.log('User registered successfully', response);
      this.router.navigate(['/login']);
    });
  }
}
