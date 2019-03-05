import { Component, OnInit } from '@angular/core';
import { OAuthService } from './services/oauth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private oAuthService: OAuthService ) { }

  ngOnInit() {
  }

  authenticate(): boolean {
    return this.oAuthService.logado;
  }

  login(): void {
    this.oAuthService.login();
  }

  logout(): void {
    this.oAuthService.logout();
  }

  authenticateMsg(): string {
    return this.oAuthService.msgUserLogado;
  }


}
