import { PUBLIC_URL, base } from '~/constants/flamingo';
export const footer = {
	inquiry: {
		image: `url(${PUBLIC_URL}/images/background-footer.jpg)`,
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook',
			},
			{
				link: 'https://twitter.com',
				icon: 'fab fa-twitter',
			},
			{
				link: 'https://instagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https://youtube.com',
				icon: 'fab fa-youtube',
			},
		],
		heading: 'Have any project in mind?',
		button: {
			text: 'make inquiry',
		},
	},
	menus: {
		menu1: {
			logo: {
				image: `${PUBLIC_URL}/images/logo.png`,
				link: base,
			},
			description: 'We are more than a digital agency',
		},
		menu2: {
			heading: 'Contact Us',
			buttons: {
				button1: {
					text: '0727729068',
					icon: 'fas fa-phone-volume icon-white',
					link: 'tel:0727729068',
				},
				button2: {
					link: 'mailto:mocanu.alexandru20@yahoo.ro',
					icon: 'far fa-envelope icon-white',
					text: 'mocanu.alexandru20@yahoo.ro',
				},
				button3: {
					icon: 'fas fa-map-marker-alt icon-white',
					text: 'Constantza, Romania',
				},
				button4: {
					icon: 'far fa-calendar-alt icon-white',
					text: 'Monday to Friday',
				},
			},
		},
		menu3: {
			heading: 'Our Services',
			buttons: ['link1', 'link2', 'link3', 'link4'],
		},
		menu4: {
			heading: 'About Us',
			buttons: [
				{
					text: 'About',
					link: base + 'about',
				},
				{
					text: 'Blog',
					link: base + '#',
				},
				{
					text: 'Contact us',
					link: base + 'contact',
				},
				{
					text: 'Works',
					link: base + 'works',
				},
			],
		},
	},
	copyright: {
		text: 'Copyright 2020 All rights reserved',
		buttons: {
			button1: {
				text: 'Privacy Policy',
			},
			button2: {
				text: 'Terms of Use',
			},
		},
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook',
			},
			{
				link: 'https://twitter.com',
				icon: 'fab fa-twitter',
			},
			{
				link: 'https://instagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https://youtube.com',
				icon: 'fab fa-youtube',
			},
		],
	},
};
export const about = {
	columns: {
		column1: {
			image: `url(${PUBLIC_URL}/images/people-talking.jpg)`,
			heading: 'Team Work',
			description: 'Committed and creative',
		},
		column2: {
			image: `url(${PUBLIC_URL}/images/people-working.jpg)`,
			heading: 'Philosophy',
			description: 'Trust pays off',
		},
		column3: {
			image: `url(${PUBLIC_URL}/images/office.jpg)`,
			heading: 'Office',
			description: 'Somewhere on earth',
		},
	},
	details: [
		{
			heading: 'Who we are',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		},
		{
			heading: 'Our philosophy',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		},
		{
			heading: 'How we work',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		},
	],
};

export const works = [
	{
		image: `url(${PUBLIC_URL}/images/watch.jpg)`,
		name: 'Smart Watch',
	},
	{
		image: `url(${PUBLIC_URL}/images/watch2.jpg)`,
		name: 'UX Design',
	},
	{
		image: `url(${PUBLIC_URL}/images/headphone.jpg)`,
		name: 'Mockup',
	},
	{
		image: `url(${PUBLIC_URL}/images/mac.jpg)`,
		name: 'The UI Design',
	},
	{
		image: `url(${PUBLIC_URL}/images/watch3.jpg)`,
		name: 'One Product',
	},
	{
		image: `url(${PUBLIC_URL}/images/flamingos.jpg)`,
		name: 'The UX Designs',
	},
];
export const perks = [
	{
		icon: 'fas fa-chart-bar icon-green mb-default',
		heading: 'Excellent Design',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
	{
		icon: 'fas fa-pen icon-green mb-default',
		heading: 'Fast Response',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
	{
		icon: 'fas fa-user-friends icon-green mb-default',
		heading: 'Time Saving',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
	{
		icon: 'fas fa-globe-europe icon-green mb-default',
		heading: 'Personal Support',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
	{
		icon: 'far fa-bookmark icon-green mb-default',
		heading: 'Best Quality',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
	{
		icon: 'fas fa-chart-area icon-green mb-default',
		heading: 'Perfect Solutions',
		description:
			'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
	},
];
export const news = [
	{
		image: `url(${PUBLIC_URL}/images/vr.jpg)`,
		heading:
			'Could this VR sketching tool be coming of age for designers in the future?',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
		button: `${base}article`,
	},
	{
		image: `url(${PUBLIC_URL}/images/design.jpg)`,
		heading:
			'8 Cities That Show You What The Future Will Look Like (Innovative Ideas)',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
		button: `${base}article`,
	},
	{
		image: `url(${PUBLIC_URL}/images/thanks.jpg)`,
		heading: '15 Gift Ideas for Mom and Dad. Wherever They Are This Year',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
		button: `${base}article`,
	},
];
export const team = [
	{
		image: `url(${PUBLIC_URL}/images/about/member1.jpg)`,
		name: 'John Doe',
		position: 'Web developer',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook-f',
			},
			{
				link: 'https://intagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https:linkedin.com',
				icon: 'fab fa-linkedin-in',
			},
		],
	},
	{
		image: `url(${PUBLIC_URL}/images/about/member2.jpg)`,
		name: 'John Doe',
		position: 'Web developer',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook-f',
			},
			{
				link: 'https://intagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https:linkedin.com',
				icon: 'fab fa-linkedin-in',
			},
		],
	},
	{
		image: `url(${PUBLIC_URL}/images/about/member3.jpg)`,
		name: 'John Doe',
		position: 'Web developer',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook-f',
			},
			{
				link: 'https://intagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https:linkedin.com',
				icon: 'fab fa-linkedin-in',
			},
		],
	},
	{
		image: `url(${PUBLIC_URL}/images/about/member4.jpg)`,
		name: 'John Doe',
		position: 'Web developer',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook-f',
			},
			{
				link: 'https://intagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https:linkedin.com',
				icon: 'fab fa-linkedin-in',
			},
		],
	},
	{
		image: `url(${PUBLIC_URL}/images/about/member5.jpg)`,
		name: 'John Doe',
		position: 'Web developer',
		socialMedia: [
			{
				link: 'https://facebook.com',
				icon: 'fab fa-facebook-f',
			},
			{
				link: 'https://intagram.com',
				icon: 'fab fa-instagram',
			},
			{
				link: 'https:linkedin.com',
				icon: 'fab fa-linkedin-in',
			},
		],
	},
];
