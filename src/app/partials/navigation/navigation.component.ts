import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // change() {
  //   this.animateMove();
  //   setTimeout(() => {
  //     this.router.navigate(['/collection']);
  //   }, 1000);
  // }

  changePromise() {
    const changeRoute = new Promise<string>((resolve) => {
      resolve('Promise Resolved');
    });

    changeRoute
      .then(() => {
        this.animateMove();
      })
      .then(() => {
        this.router.navigate(['/collection']);
      });
  }

  animateIn() {
    gsap.from('.navigation', { duration: 4, opacity: 0, delay: 0 });
  }

  animateMove() {
    gsap.to('.navigation', { rotation: 27, x: 100, duration: 1 });
  }
}
