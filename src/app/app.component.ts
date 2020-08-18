import { Component, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, OnDestroy {
  title = 'portafolio';
  so: any;

  constructor(private el: ElementRef){}

  ngAfterContentInit(): void{
    this.so = ScrollOut({});
  }

  ngOnDestroy(): void{
    this.so.teardown();
  }
}
