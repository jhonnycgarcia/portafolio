import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goup',
  templateUrl: './goup.component.html',
  styleUrls: ['./goup.component.css']
})
export class GoupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = (): void => {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 10) {
        document.getElementById('goUp').style.transform = 'scale(1)';
      } else {
        document.getElementById('goUp').style.transform = 'scale(0)';
      }
    }
  }

  scrollUp(): void {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo(0, 0);
    }
  }

}
