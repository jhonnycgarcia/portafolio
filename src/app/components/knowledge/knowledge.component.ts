import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  skills = [
    {
      title: 'Desarrollo Web',
      fontAwesomeIcon: 'fas fa-laptop-code',
      coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597463775/webdeveloper3Compress_np95rc.jpg',
      // coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597463774/webDeveloper2Compress_cysrb1.jpg',
      description: `Conocimientos basados en el desarrollo de aplicaciones web <i class="text-muted-1">(HTML – CSS- JAVASCRIPT – PHP)</i>, tanto Front-End como Back-End.`
    },
    {
      title: 'Administración de Base de Datos',
      fontAwesomeIcon: 'fas fa-database',
      coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597477459/database2Compress_qnadnt.jpg',
      description: `Manejo y administración de bases de datos relacionales <i class="text-muted-1">(Sql)</i> como no relacionales <i class="text-muted-1">(NoSql)</i> pudiendo destacar entre ellas <i class="text-muted-1">PostgreSQL, MySQL</i> y <i class="text-muted-1">MongoDB</i>.`
    },
    {
      title: 'Maquetación',
      fontAwesomeIcon: 'far fa-object-group',
      coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597464326/maquetacion1Compress_dcpqrn.jpg',
      description: `Elaboración de modelos y diagramas implementando el lenguaje unificado de modelado <i class="text-muted-1">(UML)</i> para para visualizar, especificar, construir y documentar sistemas.`
      },
    {
      title: 'Gestión de Proyectos',
      fontAwesomeIcon: 'fas fa-book',
      coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597499428/proyectManagement6Compress_uec2tl.jpg',
      description: `Planificación, seguimiento y control a proyectos en sus múltiples etapas haciendo uso de las buenas prácticas para la gestión de proyectos <i class="text-muted-1">(PMBOK)</i>.`
    }
  ];
  constructor() { }

  ngOnInit(): void {}

}
