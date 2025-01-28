import { google } from 'react-icons-kit/icomoon/google';
import { linkedin } from 'react-icons-kit/icomoon/linkedin';
import {gitlab} from 'react-icons-kit/feather/gitlab';
import logo42  from "../assets/imgs/logos/42Logo.png";

export const sidebarRightData = [
	{
		href: "https://www.google.com",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: google,
		image: null,
	},

	{
		href: "https://www.linkedin.com",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: linkedin,
		image: null,
	},

	{
		href: "https://gitlab.com/",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: gitlab,
		image: null,
	},

	{
		href: "https://42quebec.com/comment-ca-marche/le-programme/",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: null,
		image: logo42.src,
	},

	// {
	// 	href: "",
	// 	target: "",
	// 	rel: "",
	// 	icone: "",
	// 	image: ,
	// },
];
