import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Proyect} from '../proyects/proyects-data';

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css']
})
export class ProyectCardComponent implements OnInit {

  @Input() proyect: Proyect; // Item inyectado
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {}

}
