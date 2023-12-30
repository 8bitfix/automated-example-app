import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { Subject, map, take, takeUntil } from "rxjs";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const destroy$ = new Subject<boolean>();
  let roles: string[] = [];
  const oidcSecurityService = inject(OidcSecurityService);
  const router = inject(Router);

  oidcSecurityService.getPayloadFromAccessToken()
    .pipe(takeUntil(destroy$))
    .subscribe(payload => roles = payload.resource_access['curio-demo-backend'].roles);

  return oidcSecurityService.isAuthenticated$.pipe(
    takeUntil(destroy$),
    take(1),
    map(({ isAuthenticated }) => {
      if (!isAuthenticated) {
        // redirect if not authenticated
        return router.parseUrl('/unauthorized');
      }

      // Get the roles required from the route.
      const requiredRoles = route.data['roles'];

      // Allow the user to to proceed if no additional roles are required to access the route.
      if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
        return true;
      }

      console.log('roles', roles);

      // Allow the user to proceed if all the required roles are present.
      if (requiredRoles.every((role) => roles.includes(role))) {
        return true;
      } else {
        // redirect to error page if the user doesn't have the nessecairy  role to access
        // we will define this routes in a bit
        router.navigate(['access-denied']);
        return false;
      }
    })
  );
};
