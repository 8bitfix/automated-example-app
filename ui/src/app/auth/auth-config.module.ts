import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              secureRoutes: ['/api/'],
              authority: environment.keycloak.issuer,
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: 'http://localhost:4200/',
              clientId: environment.keycloak.clientId,
              scope: 'openid', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30
          }
      })],
    exports: [AuthModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AuthConfigModule {}
