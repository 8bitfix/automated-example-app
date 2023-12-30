import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppConfig {
    inputStyle: string;
    colorScheme: string;
    theme: string;
    ripple: boolean;
    menuMode: string;
    scale: number;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    sidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
    sidebarToggleVisible: boolean;
    sidebarToggleCreated: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    config: AppConfig = {
        ripple: true,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-purple',
        scale: 14,
    };

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        sidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        sidebarToggleVisible: true,
        sidebarToggleCreated: true
    };

    private configUpdate = new Subject<AppConfig>();

    private overlayOpen = new Subject<any>();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    onMenuToggle() {
        this.state.sidebarVisible = !this.state.sidebarVisible;
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
        }
        else {
            this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    isOverlay() {
        return this.config.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }

    onConfigUpdate() {
        this.configUpdate.next(this.config);
    }

    setState(state: LayoutState) {
      this.state = state;
    }

    resetState() {
      this.state.overlayMenuActive = false;
      this.state.staticMenuMobileActive = false;
      this.state.staticMenuDesktopInactive = true;
      this.state.menuHoverActive = false;
      this.state.sidebarVisible = false;
    }
}
