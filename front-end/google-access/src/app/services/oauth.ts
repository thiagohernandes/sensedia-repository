import { Injectable } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angular5-social-login';
import { of } from 'rxjs';

@Injectable()
export class OAuthService {

  public user: SocialUser;
  public logado: boolean;
  public readonly msgUserLogado: string = 'Você está vendo essa mensagem pois efetuou corretamente o login!';

  constructor(private authService: AuthService) {
  }

  authVerifyState() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user === null) {
        this.logado = false;
      } else {
        this.logado = true;
      }
    });
  }

  login(): void {
    const waitExecute = of(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID));
    waitExecute.subscribe(() => {
      this.authVerifyState();
    });
  }

  logout(): void {
    this.authService.signOut();
    this.logado = false;
  }

}
