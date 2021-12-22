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
			buttons: {
				button1: {
					text: 'Link nb.1',
				},
				button2: {
					text: 'Link nb.2',
				},
				button3: {
					text: 'Link nb.3',
				},
				button4: {
					text: 'Link nb.4',
				},
			},
		},
		menu4: {
			heading: 'About Us',
			buttons: {
				button1: {
					text: 'About',
					link: base + 'about',
				},
				button2: {
					text: 'Blog',
					link: base + '#',
				},
				button3: {
					text: 'Contact us',
					link: base + 'contact',
				},
				button4: {
					text: 'Works',
					link: base + 'works',
				},
			},
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
		socialMedia: {
			facebook: {
				link: 'https://facebook.com',
				icon: 'fab fa-facebook',
			},
			twitter: {
				link: 'https://twitter.com',
				icon: 'fab fa-twitter',
			},
			instagram: {
				link: 'https://instagram.com',
				icon: 'fab fa-instagram',
			},
			youtube: {
				link: 'https://youtube.com',
				icon: 'fab fa-youtube',
			},
		},
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
