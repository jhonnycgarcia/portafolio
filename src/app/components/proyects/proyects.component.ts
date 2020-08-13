import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyects: Proyect[] = [
    { id: '1', title: 'Title 1', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153386/coffeeCupPurpleCompress_wbndmq.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
    { id: '2', title: 'Title 2', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153386/coffeeCupOrangeCompress_du2vty.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
    { id: '3', title: 'Title 3', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153385/coffeeCupRedCompress_b664sd.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
    { id: '4', title: 'Title 4', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153385/coffeeCupCyanCompress_z7nriv.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
    { id: '5', title: 'Title 5', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153386/coffeeCupPurpleCompress_wbndmq.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
    { id: '6', title: 'Title 6', coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153385/coffeeCupCyanCompress_z7nriv.png', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quam.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Proyect{
  id?: string; // Id
  title: string;
  coverImage: string;
  description: string;
}