import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UserRequest } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide: boolean = true;
  username: string = '';
  password: string = '';
  validateError: boolean = false;
  messageError: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private _userService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  validateCredentials(): void {
    if (this.username.length == 0 && this.password.length == 0) {
      this.validateError = true
      this.messageError = 'Los campos usuario y contraseña están vacios'
      return;
    } else if (this.username.length == 0) {
      this.validateError = true
      this.messageError = 'El campo usuario esta vacio'
      return;
    } else if (this.password.length == 0) {
      this.validateError = true
      this.messageError = 'El campo contraseña esta vacio'
      return;
    }

    const user: UserRequest = {
      username: this.username,
      password: this.password
    }

    this._userService.login(user).subscribe({
      next: (v) => {
        // Aquí manejas la respuesta exitosa
        localStorage.setItem('username', v.data.username)
        localStorage.setItem('token', v.data.token)
        localStorage.setItem('rol', v.data.rol)
        this.router.navigate(['/dashboard'])
      },
      error: (e) => {
        this.validateError = true
        this.messageError = e.error.message
      }
    });
  }
}
