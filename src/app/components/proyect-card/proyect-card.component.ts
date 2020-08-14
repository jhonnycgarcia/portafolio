import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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

export interface Proyect{
  id?: string; // Id
  title: string;
  coverImage: string;
  description: string;
}