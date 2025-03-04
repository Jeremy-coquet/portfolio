import { google } from 'react-icons-kit/icomoon/google';
import { linkedin } from 'react-icons-kit/icomoon/linkedin';
import {gitlab} from 'react-icons-kit/feather/gitlab';
import {github} from 'react-icons-kit/feather/github';
import logo42  from "../assets/imgs/logos/42Logo.png";

export const sidebarRightData = [
	{
		href: "https://www.gmail.com",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: google,
		image: null,
	},

	{
		href: "https://www.linkedin.com/in/jeremy-coquet",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: linkedin,
		image: null,
	},

	{
		href: "https://github.com/Jeremy-coquet",
		target: "_blank",
		rel: "noopener noreferrer",
		icone: github,
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
