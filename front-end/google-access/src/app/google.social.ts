import { GoogleLoginProvider, AuthServiceConfig } from 'angular5-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '770729081378-l24fumv73esoh1p9o1g27d1srlcfe46g.apps.googleusercontent.com'
    )
  }
]);

export function provideConfig() {
  return config;
}
