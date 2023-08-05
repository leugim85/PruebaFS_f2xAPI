import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, tap } from 'rxjs';
import { Token } from '../../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = { userName: '', password: '' };
  token!: Token;
  showSpinner = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  validateUser() {
    this.showSpinner = true;
    this.authService
      .autenticateUser(this.user)
      .pipe(
        tap((resp) => {
          this.token = resp;
          sessionStorage.setItem('token', this.token.token);
          if (this.token) {
            this.router.navigate(['/vehicles-reporter', 'report']);
          } else {
            this.toastr.error('No ha sido posible validar al usuario');
          }
          this.showSpinner = false;
        }),
        catchError((err) => {
          this.toastr.error('No ha sido posible validar al usuario');
          this.showSpinner = false;
          return of(null);
        })
      )
      .subscribe();
  }
}
