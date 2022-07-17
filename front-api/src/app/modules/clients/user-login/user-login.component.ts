import { Doctor } from './../../shared/models/Doctor';
import { DoctorsService } from './../doctors.service';
import { TokenService } from './../../../token.service';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { Login } from '../../shared/models/Login';
import { LoginResponse } from '../../shared/models/LoginResponse';
import { Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private signInService: SignInService,
    private messageService: MessageService,
    private tokenService: TokenService,
    private router: Router,
    private doctorsService: DoctorsService
  ) {
    this.routingService.changeRoutes([
      {
        name: 'Accueil',
        styleClasses: 'nav-item',
        url: '',
      },
      {
        name: 'Inscription',
        styleClasses: 'nav-item',
        url: 'client/signUp/user',
      },
    ]);
  }

  ngOnInit(): void {}

  login(login: Login) {
    this.signInService.login(login).subscribe(
      (loginResponse: LoginResponse) => {
        this.tokenService.setUser(loginResponse.user);
        this.tokenService.setToken(loginResponse.jwttoken);
        if (loginResponse.user.roles.find((role) => role.name == 'DOCTOR')) {
          this.doctorsService
            .getDoctor(loginResponse.user.id)
            .subscribe((signedDoctor: Doctor) =>
              this.tokenService.setDoctor(signedDoctor)
            );
        } else {
          this.tokenService.clearDoctor();
        }
        this.router.navigate(['/home']);
      },
      (error) => this.alert()
    );
  }
  alert() {
    this.messageService.clear('main');
    setTimeout(() => {
      this.messageService.add({
        severity: 'error',
        key: 'main',
        summary: 'Connexion impossible',
        detail:
          'Assurez-vous de saisir une adresse e-mail et un mot de passe valides.',
      });
    }, 400);
  }
}
