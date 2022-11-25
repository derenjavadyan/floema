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

  animateIn() {
    gsap.from('.navigation', { duration: 4, opacity: 0, delay: 0 });
  }

  animateOut() {
    gsap.from('.navigation', { duration: 1, opacity: 0, delay: 0 }).then(() => {
      this.router.navigate(['/collection']);
    });
  }

  animateMove() {
    gsap.to('.navigation', { rotation: 27, x: 100, duration: 1 });
  }

  animateBack() {
    gsap.to('.navigation', { rotation: 0, x: 100, duration: 1 });
  }
}

//Promise
// changePromise() {
//   const changeRoute = new Promise<string>((resolve) => {
//     resolve('Promise Resolved');
//   });

//   changeRoute
//     .then(() => {
//       this.animateMove();
//     })
//     .then(() => {
//       this.router.navigate(['/collection']);
//     });
// }

// async &await
// changePromise = async () => {
//   const animate = await this.animateIn;
//   const route = await this.router.navigate(['/collection']);
// };

//working
// change() {
//   this.animateMove();
//   setTimeout(() => {
//     this.router.navigate(['/collection']);
//   }, 1000);
// }
