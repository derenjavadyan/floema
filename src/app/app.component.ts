import { Component } from '@angular/core';
import { gsap } from 'gsap';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'floema';
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = '';

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        console.log(event);
        // this.animateMove();
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  animateIn() {
    gsap.from('.main', { duration: 4, opacity: 0, delay: 0 });
  }

  animateOut() {
    gsap.to('.main', { duration: 1, opacity: 1, delay: 0 });
  }

  animateMove() {
    gsap.to('.main', { rotation: 27, x: 100, duration: 1 });
  }
}

//https://www.angularjswiki.com/angular/how-to-detect-route-change-in-angular-with-examples/
