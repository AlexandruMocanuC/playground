import { PUBLIC_URL, base } from "~/constants/flamingo";
export const home = {
	header: {
		image: `url(${PUBLIC_URL}/images/header-homepage.jpg)`,
		description: "Creative mind, creative works",
		heading: "We are digital agency.",
		button: "getting started",
	},
	services: {
		heading: "Services.",
		description: "Our Services for clients",
	},
	works: {
		heading: "Works.",
		description: "Things We've Made",
		button: { text: "view all", link: `${base}works` },
	},
	about: {
		heading: "About.",
		description: "We are more than digital agency",
	},
	testimonials: {
		heading: "Testimonials.",
		description: "We are more than digital agency",
	},
};
export const customers = [
	"fab fa-jedi-order",
	"fas fa-star-of-life",
	"fas fa-store-alt",
	"fas fa-share-alt-square",
	"fas fa-poo-storm",
	"fas fa-charging-station",
	"fas fa-snowplow",
];
export const testimonials = [
	{
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
		avatar: `url(${PUBLIC_URL}/images/avatar.jpg)`,
		name: "John Doe",
		position: "Web developer",
	},
	{
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
		avatar: `url(${PUBLIC_URL}/images/avatar.jpg)`,
		name: "John Doe",
		position: "Web developer",
	},
	{
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
		avatar: `url(${PUBLIC_URL}/images/avatar.jpg)`,
		name: "John Doe",
		position: "Web developer",
	},
	{
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
		avatar: `url(${PUBLIC_URL}/images/avatar.jpg)`,
		name: "John Doe",
		position: "Web developer",
	},
];
export const services = {
	header: {
		image: `url(${PUBLIC_URL}/images/services/header-bg.jpg)`,
		heading: "Services.",
	},
	ourServices: {
		heading: "Our services.",
		description: "Our Services for clients",
	},
	works: {
		image: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
		heading: "Wanna see our works?",
		button: { text: "all projects", link: `${base}works` },
	},
	skills: {
		heading: "Here are some of our great skills",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.",
	},
};
export const works = {
	header: {
		image: `url(${PUBLIC_URL}/images/works/tattoo.jpg)`,
		heading: "Our works.",
	},
	content: {
		heading: "Our Works.",
		description: "See all our works",
		columns: [
			{
				image: `url(${PUBLIC_URL}/images/works/item1.jpg)`,
				heading: "Arhitecture",
				category: "Art",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item2.jpg)`,
				heading: "Photography",
				category: "Art",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item3.jpg)`,
				heading: "Teaser",
				category: "Video",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item4.jpg)`,
				heading: "Styles",
				category: "Art",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item5.jpg)`,
				heading: "About",
				category: "Writings",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item6.jpg)`,
				heading: "Names",
				category: "Writings",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item7.jpg)`,
				heading: "Titles",
				category: "Writings",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item8.jpg)`,
				heading: "Something",
				category: "Writings",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item9.jpg)`,
				heading: "Reaction",
				category: "Video",
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item10.jpg)`,
				heading: "Miscelanious",
				category: "Video",
			},
		],
	},
};
export const about = {
	header: {
		image: `url(${PUBLIC_URL}/images/about/office.jpg)`,
		heading: "About us.",
	},
	skills: {
		heading: "Here are some of our great skills",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien.",
		image: `url(${PUBLIC_URL}/images/about/phone.jpg)`,
	},
	video: {
		image: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
		heading: "Best Solutions for Your Business",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.",
		button: { text: "Watch video" },
	},
	team: {
		heading: "Meet our team.",
		description: "the best people to support your project",
	},
};
export const contact = {
	header: {
		image: `url(${PUBLIC_URL}/images/map.jpg)`,
		heading: "Contact us.",
	},
	content: {
		heading: "Get in touch with us!",
		description: "Lorem ipsum dolor sit amet",
		columns: {
			column1: {
				heading: "PHONE",
				buttons: {
					button1: {
						text: "+1234567890",
						link: "tel:1234567890",
					},
					button2: {
						text: "+0987654321",
						link: "tel:0987654321",
					},
				},
			},
			column2: {
				heading: "ADDRESS",
				description:
					"Lorem ipsum dolor sit amet, consecteturadipiscing elit.",
			},
			column3: {
				heading: "EMAIL",
				buttons: {
					button1: {
						text: "anymail@mail.com",
						link: "mailto:anymail@mail.com",
					},
					button2: {
						text: "officialmail@mail.com",
						link: "mailto:officialmail@mail.com",
					},
				},
			},
		},
	},
	form: {
		heading: "Send us a message!",
		description: "Lorem ipsum dolor sit amet",
	},
};
export const blog = {
	header: {
		image: `url(${PUBLIC_URL}/images/pen.jpg)`,
		heading: "Blog.",
	},
	heading: "Check our latest news.",
	description: "Check Out Some of Our News",
	articles: [
		{
			image: `url(${PUBLIC_URL}/images/vr.jpg)`,
			heading:
				"Could this VR sketching tool be coming of age for designers in the future?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
		{
			image: `url(${PUBLIC_URL}/images/design.jpg)`,
			heading:
				"8 Cities That Show You What The Future Will Look Like (Innovative Ideas)",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
		{
			image: `url(${PUBLIC_URL}/images/thanks.jpg)`,
			heading:
				"15 Gift Ideas for Mom and Dad. Wherever They Are This Year",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
		{
			image: `url(${PUBLIC_URL}/images/vr.jpg)`,
			heading:
				"Could this VR sketching tool be coming of age for designers in the future?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
		{
			image: `url(${PUBLIC_URL}/images/design.jpg)`,
			heading:
				"8 Cities That Show You What The Future Will Look Like (Innovative Ideas)",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
		{
			image: `url(${PUBLIC_URL}/images/thanks.jpg)`,
			heading:
				"15 Gift Ideas for Mom and Dad. Wherever They Are This Year",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
			button: `${base}article`,
		},
	],
};
export const article = {
	header: {
		category: "Technology",
		heading:
			"Could this VR sketching tool be coming of age for designers in the future?",
		image: `url(${PUBLIC_URL}/images/vr.jpg)`,
	},
	content: {
		sidebar: {
			details: [
				{
					heading: "Written by",
					description: "John Doe",
				},
				{
					heading: "Posted on",
					description: "January 3, 2022",
				},
				{
					heading: "Tags",
					description: "Design, Technology",
				},
			],
			socialMedia: [
				{
					link: "https://facebook.com",
					icon: "fab fa-facebook",
				},
				{
					link: "https://twitter.com",
					icon: "fab fa-twitter",
				},
				{
					link: "https://instagram.com",
					icon: "fab fa-instagram",
				},
			],
		},
		main: [
			{
				type: "description",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla.",
			},
			{
				type: "paragraph",
				content:
					"Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a.",
			},
			{
				type: "heading",
				content: "The New Generation of VR is Coming!",
			},
			{
				type: "paragraph",
				content:
					"Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a.",
			},
			{
				type: "image",
				content: `${PUBLIC_URL}/images/vr.jpg`,
			},
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla. Nullam fringilla nec augue id sollicitudin. Quisque interdum lobortis tortor, sit amet aliquam urna aliquam in. Morbi in quam a tellus tempor tincidunt sed vitae eros.",
			},
			{
				type: "paragraph",
				content:
					"Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a. Quisque suscipit, felis ut congue molestie, eros dolor mattis dolor, a sagittis sem ligula vitae dui. Sed pellentesque sagittis tincidunt. ",
			},
			{
				type: "heading",
				content:
					"\"Your time is limited, so don't waste it living someone else's life.\"",
			},
			{
				type: "paragraph",
				content: " Steve Jobs | Ex CEO of Apple ",
			},
		],
	},
};
