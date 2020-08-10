import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalcard',
  templateUrl: './personalcard.component.html',
  styleUrls: ['./personalcard.component.css']
})
export class PersonalcardComponent implements OnInit {

  cardTitle = 'Resumen';
  personalData = {
    name: 'Jhonny',
    lastName: 'García',
    fullName: '',
    academicLevel: 'Ingeniero en informática',
    beginWork: 2016,
    oldWork: 0,
    summaryRows: [],
    getFullName(): void{ this.fullName = this.name + ' ' + this.lastName; },
    getOldWork(): void{ this.oldWork = new Date().getFullYear() - this.beginWork; },
    getSummary(): void{
      this.summaryRows = [
        `Trabajo como desarrollador web desde hace ${this.oldWork} años <span class="text-muted">(${this.beginWork})</span>, poseo experiencia en desarrollo de aplicaciones web y gestión de proyectos informáticos.`,
        'A lo largo de mi crecimiento profesional, tanto académica como laboralmente, he adquirido habilidades y conocimientos que me permiten desempeñarme de forma eficiente en el entorno laboral dando como resultado productos y software de gran calidad que cumplan con las necesidades y requerimientos solicitados.',
        'Comprometido con mi trabajo, siento pasión por lo que hago, trabajo de forma organizada apuntando siempre a la proactividad y productividad para colocar ese gran valor añadido que todo proyecto necesita.'
      ];
    },
    build(): void{
      this.getFullName();
      this.getOldWork();
      this.getSummary();
    }
  };

  constructor() {
    this.personalData.build();
  }

  ngOnInit(): void {}
}
