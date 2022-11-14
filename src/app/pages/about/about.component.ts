import { Component, OnInit } from '@angular/core';

interface Gallery {
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public galleries: Gallery[] = [{ name: 'hi' }];

  ngOnInit(): void {}
}
