import { SpecialisationsProjectsType } from "@/types/specialisationsProjects";
import python from "../assets/imgs/python.png";
import django from "@/assets/imgs/django.png"

export const specialisationsProjectsData :SpecialisationsProjectsType[] = [
    {
        title: 'Piscine python for Data science',
        description: ' Python appliquées à la data science, incluant la manipulation de données, l\'analyse et la visualisation.',
        skills: ['python','matplotlib', 'numpy', 'pandas'],
        image: python.src,
    },

    {
        title: 'Piscine python django',
        description: 'Projet portant sur le framework Django pour le développement web en Python, ' +
            'incluant la création d’applications web, la gestion des bases de données et l’architecture MVC.',
        skills: ['python','django', 'SQL'],
        image: django.src,
    },
];