export interface Proyect {
    id?: string;
    title?: string;
    coverImage?: string;
    slug?: string;
    summary?: string;
    description?: string;
}

const data = [
    {
        id: '1',
        title: 'Proyecto II',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597706545/projectDEM400pxCompress_c5gc2n.png',
        slug: '',
        summary: 'Gestión y Evaluación de un Sistema de control de Asistencias',
        description: ''
    },
    {
        id: '2',
        title: 'Proyecto I',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597706556/projectCGP400pxCompress_ilvehs.png',
        slug: '',
        summary: 'Optimización del Sistema para el Control y Registro de Asistencia',
        description: ''
    },
    {
        id: '3',
        title: 'SIGEI',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597706556/projectCGP400pxCompress_ilvehs.png',
        slug: '',
        summary: 'Sistema de Gestión Interna',
        description: 'Es una herramienta interna de la SECGP para mejoras de los procesos'
    },
    {
        id: '4',
        title: 'SICA',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597706556/projectCGP400pxCompress_ilvehs.png',
        slug: '',
        summary: 'Sistema de Información para el Control y Auditoría',
        description: 'Es una herramienta que permite la verificación y auditoría de los procesos de ascensos y pie de fuerza de las policías ostensivas.'
    },
    {
        id: '5',
        title: 'SIRCAS',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1597706556/projectCGP400pxCompress_ilvehs.png',
        slug: '',
        summary: 'Sistema para el Registro y Control de la Asistencia',
        description: ''
    },
    {
        id: '6',
        title: 'Title 6',
        coverImage: 'https://res.cloudinary.com/jhonnycgarcia/image/upload/v1596153385/coffeeCupCyanCompress_z7nriv.png',
        slug: '',
        summary: 'Lorem ipsum',
        description: ''
    },
];

export default data;
