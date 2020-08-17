import { Component, OnInit } from '@angular/core';
import {Proyect, default as data} from './proyects-data';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyects: Proyect[] = data;

  constructor() { }

  ngOnInit(): void {}
}
