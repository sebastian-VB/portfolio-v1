import { Project } from "./project.interface";

export class Projects{

    static listProjects: Project[] = [
        {
            image: '../../assets/img/app-peliculas.png',
            name_project: 'App-Películas',
            technologies: [
                {
                    name: 'HTML'
                },
                {
                    name: 'CSS'
                },
                {
                    name: 'JS'
                },
            ],
            urlRepository: 'https://github.com/sebastian-VB/App-Peliculas'
        },
        {
            image: '../../assets/img/juego-memoria.png',
            name_project: 'Juego de Memoria',
            technologies: [
                {
                    name: 'HTML'
                },
                {
                    name: 'CSS'
                },
                {
                    name: 'JS'
                },
            ],
            urlRepository: 'https://github.com/sebastian-VB/JuegoDeMemoria'
        },
        {
            image: '../../assets/img/landing-page.png',
            name_project: 'Landingpage',
            technologies: [
                {
                    name: 'HTML'
                },
                {
                    name: 'CSS'
                },
            ],
            urlRepository: 'https://github.com/sebastian-VB/LandingPage-withCurvedSections'
        },
        {
            image: '../../assets/img/portal-examenes.png',
            name_project: 'Portal de exámenes - frontent',
            technologies: [
                {
                    name: 'ANGULAR'
                },
                {
                    name: 'TYPESCRIPT'
                },
            ],
            urlRepository: 'https://github.com/sebastian-VB/testing-system-frontend'
        },
        {
            image: '../../assets/img/no-image.png',
            name_project: 'Portal de exámenes - backend',
            technologies: [
                {
                    name: 'JAVA'
                },
                {
                    name: 'SPRING BOOT'
                },
                {
                    name: 'JWT'
                },
            ],
            urlRepository: 'https://github.com/sebastian-VB/testing-system-backend'
        },
    ];

}