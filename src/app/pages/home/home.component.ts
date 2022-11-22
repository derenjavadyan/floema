import { Component, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    this.animateIn();
  }

  ngOnDestroy(): void {}

  animateIn() {
    gsap.from('.home', { duration: 2, opacity: 0, delay: 0 });
  }
}
