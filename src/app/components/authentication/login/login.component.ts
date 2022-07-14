import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MessageService } from 'primeng/api';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
    private messageService: MessageService,
     private tokenStorage: TokenStorageService,
     private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(): void {

    this.authService.login(this.email, this.password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/seguimiento'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.messageService.add({severity:"error", summary:'Error', detail:err.error});

      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  registrarse(): void{
    this.router.navigate(['/register'])
  }
}
