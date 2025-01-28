import fractol from "../assets/imgs/fractol02.jpeg";
import cpp from "../assets/imgs/cpp01.jpg";
import pushSwap from "../assets/imgs/push_swap.jpg";
import minishell from "../assets/imgs/minishell.png";
import IRC from "../assets/imgs/IRC.webp";
import pong from "../assets/imgs/pong.png";
import { CursusProjectsType } from "../types/cursusProjects";


export const cursusProjetsData :CursusProjectsType[] = [
	{
		title: 'Fractol',
		description: 'Projet graphique qui allie mathématiques et programmation \
						pour générer des motifs complexes.',
		skills: ['C', 'minilibx' ,'maths'],
		image: fractol.src,
	},

	{
		title: 'Piscine CPP',
		description: "Piscine CPP de 10 modules permettant d'explorer le domaine de la \
						Programmation orientée objet en C++, les notions de classes et de polymorphismes, \
						de templates et de casts...",
		skills: ['c++', 'Programmation orientée objet'],
		image: cpp.src,
	},

	{
		title: "Push Swap",
		description: "Ce projet vise à résoudre le défi de trier une pile contenant jusqu'à 500 éléments \
					en utilisant le moins de mouvements possible. \
					Pour cela, j'ai utilisé des listes doublement chaînées circulaires \
					et j'ai adapté mon approche pour intégrer l'algorithme de tri radix.",
		skills: ["C", "listes doublement chainées circulaire", "Algorithme", "Radix"],
		image: pushSwap.src,
	},

	{
		title: "Minishell",
		description: "Premier projet groupe, ayant pour but de recréer un interprêteur de commande \
						se rapprochant du comportement de Bash. \
						Les built-in implementés sont echo, env, export, unset, pwd, cd, exit. \
						Minishell gère aussi les pipes, les redirections, les retours d'erreur, \
						les variables d'environnements",
		skills: ["C", "Bash", "Git/ Travail d'équipe"],
		image: minishell.src,
	},

	{
		title: "IRC",
		description: "Projet de groupe portant sur la création d\'un serveur IRC",
		skills: ["C++", "socket"],
		image: IRC.src,
	},

	{
		title: "Transcendance",
		description: "Projet de groupe représentant l'esprit du jeu pong, avec un backend django\
		pour la gestion de profil ",
		skills: ["python", "django", "API REST", "postgreSQL", "docker"],
		image: pong.src,
	},


	// TODO: complete to another project
	// {
	// 	title: "",
	// 	description: "",
	// 	skills: "",
	// 	image: "",
	// },
];