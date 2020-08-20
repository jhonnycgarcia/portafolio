import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'portafolio';
  so: any;

  constructor(){}

  ngAfterViewInit(): void{
    this.so = ScrollOut();
  }

  ngOnDestroy(): void{
    this.so.teardown();
  }
}
