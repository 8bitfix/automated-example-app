import { ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subject, filter, takeUntil } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { AppSidebarComponent, LayoutService, SideMenuButtonComponent } from './common-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{

  destroyed = new Subject()

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  isAuthenticated = false;

  basketOpen = false;

  private layoutState =  {
    staticMenuDesktopInactive: true,
    overlayMenuActive: false,
    sidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    sidebarToggleVisible: this.isAuthenticated,
    sidebarToggleCreated: this.isAuthenticated
  }

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(SideMenuButtonComponent) sideMenuButton!: SideMenuButtonComponent;

  constructor(public oidcSecurityService: OidcSecurityService, public layoutService: LayoutService,
              public renderer: Renderer2, public router: Router) {
    this.layoutService.overlayOpen$.pipe(takeUntil(this.destroyed)).subscribe(() => {
        if (!this.menuOutsideClickListener) {
            this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                                           this.appSidebar.el.nativeElement.contains(event.target) ||
                                           this.sideMenuButton.trigger.nativeElement.isSameNode(event.target) ||
                                           this.sideMenuButton.trigger.nativeElement.contains(event.target));
                if (isOutsideClicked) {
                    this.hideMenu();
                    this.layoutService.resetState();
                }
            });
        }

        // if (!this.profileMenuOutsideClickListener) {
        //     this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
        //         const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
        //             || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

        //         if (isOutsideClicked) {
        //             console.log('clicked outside 2');
        //             this.hideProfileMenu();
        //         }
        //     });
        // }

        if (this.layoutService.state.staticMenuMobileActive) {
            this.blockBodyScroll();
        }
    });

    this.router.events.pipe(takeUntil(this.destroyed), filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
            this.layoutService.resetState();
            this.hideMenu();
            this.hideProfileMenu();
        });

  }

  hideMenu() {
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  hideProfileMenu() {
      if (this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener();
          this.profileMenuOutsideClickListener = null;
      }
  }

  blockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.add('blocked-scroll');
      }
      else {
          document.body.className += ' blocked-scroll';
      }
  }

  unblockBodyScroll(): void {
      console.log('unblock body scroll');
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

  get containerClass() {
      return {
          'layout-theme-light': this.layoutService.config.colorScheme === 'light',
          'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
          'layout-overlay': this.layoutService.config.menuMode === 'overlay',
          'layout-static': this.layoutService.config.menuMode === 'static' ,
          'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
          'layout-overlay-active': this.layoutService.state.overlayMenuActive,
          'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
          'p-input-filled': this.layoutService.config.inputStyle === 'filled',
          'p-ripple-disabled': !this.layoutService.config.ripple
      }
  }

  ngOnDestroy() {
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
      }
      this.destroyed.next(null);
      this.destroyed.complete();
  }

  ngOnInit() {
    this.layoutService.config = {
        ripple: true,                      //toggles ripple on and off
        inputStyle: 'outlined',             //default style for input elements
        menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
        colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
        theme: 'lara-lights-indigo',         //default component theme for PrimeNG
        scale: 12                           //size of the body font size to scale the whole application
    };

    this.oidcSecurityService
          .checkAuth()
          .pipe(takeUntil(this.destroyed))
          .subscribe( ({ isAuthenticated, userData, accessToken, errorMessage })  => {
            this.isAuthenticated = isAuthenticated;
            this.setLayoutState(isAuthenticated);
        });
  }

  private setLayoutState(isAuthenticated: boolean) {
    this.layoutState.sidebarToggleCreated = isAuthenticated;
    this.layoutState.sidebarToggleVisible = isAuthenticated;
    this.layoutService.setState(this.layoutState);
  }

  handleTopbarButton(event: any) {
    this.blockBodyScroll();
    if (event == 'login') {
      this.loginWithPopup();
    } else if (event === 'logout') {
      this.logout();
    } else if (event === 'basket') {
      this.basketOpen = true;
    } else if (event === 'manage') {
      this.router.navigateByUrl('/product-management');
    }
  }

  handleBasketClosed(event: any) {
    this.basketOpen = false;
  }

  private loginWithPopup() {
    this.oidcSecurityService
            .authorizeWithPopUp()
            .pipe(takeUntil(this.destroyed))
            .subscribe(({ isAuthenticated, userData, accessToken, errorMessage }) => {
      this.isAuthenticated = isAuthenticated;
      this.setLayoutState(isAuthenticated);
    });
  }

  private logout() {
    this.oidcSecurityService.logoffAndRevokeTokens().pipe(takeUntil(this.destroyed))
      .subscribe((result) => console.log(result));
  }
}

