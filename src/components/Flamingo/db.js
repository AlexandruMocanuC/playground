import { base, PUBLIC_URL } from "~/constants/flamingo";
export const nav = {
	logo: `${PUBLIC_URL}/images/logo.png`,
	menu: [
		{
			link: base,
			text: "home",
		},
		{
			link: `${base}services/`,
			text: "services",
		},
		{
			link: `${base}works/`,
			text: "Works",
		},
		{
			link: `${base}about/`,
			text: "about",
		},
		{
			link: `${base}blog/`,
			text: "blog",
		},
	],
	contact: {
		link: `${base}contact`,
		text: "contact",
	},
	search: false,
};
export const services = [
	{
		icon: "far fa-paper-plane mb-m icon-green",
		heading: "Future Concept.",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
	},
	{
		icon: "fas fa-brain mb-m icon-green",
		heading: "The Big Ideas.",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
	},
	{
		icon: "far fa-lightbulb mb-m icon-green",
		heading: "Creative Solutions.",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
	},
];
export const progress = [
	{
		classes: "progress_bar_90",
		name: "UI Design",
		percentage: "90%",
	},
	{
		classes: "progress_bar_60",
		name: "UX Design",
		percentage: "60%",
	},
	{
		classes: "progress_bar_80",
		name: "Digital Marketing",
		percentage: "80%",
	},
	{
		classes: "progress_bar_70",
		name: "Social Media",
		percentage: "70%",
	},
];
