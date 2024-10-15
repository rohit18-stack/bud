import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User();
 
  constructor(private userService: UserService, private router: Router) { }
 
  login() {
    this.userService.login(this.user).subscribe(response => {
      if (response && response.id) { // Check if response and id are present
        console.log('User logged in successfully');
        // Store user information
        localStorage.setItem('userId', response.id.toString());
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Login failed');
      }
    }, error => {
      console.error('Login error:', error); // Handle error case
      console.log('Login failed');
    });
  }
}