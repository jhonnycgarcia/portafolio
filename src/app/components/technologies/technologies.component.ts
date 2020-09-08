import { Component, OnInit } from '@angular/core';
import { Technology, default as data } from './technologies-data';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
