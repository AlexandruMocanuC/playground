import { PUBLIC_URL, base } from '~/constants/flamingo';
export const home = {
	header: {
		image: `url(${PUBLIC_URL}/images/header-homepage.jpg)`,
		description: 'Creative mind, creative works',
		heading: 'We are digital agency.',
		button: 'getting started',
	},
	services: {
		heading: 'Services.',
		description: 'Our Services for clients',
	},
	works: {
		heading: 'Works.',
		description: "Things We've Made",
		button: { text: 'view all', link: `${base}works` },
	},
	about: {
		heading: 'About.',
		description: 'We are more than digital agency',
	},
	testimonials: {
		heading: 'Testimonials.',
		description: 'We are more than digital agency',
	},
};
export const services = {
	header: {
		image: `url(${PUBLIC_URL}/images/services/header-bg.jpg)`,
		heading: 'Services.',
	},
	ourServices: {
		heading: 'Our services.',
		description: 'Our Services for clients',
	},
	works: {
		image: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
		heading: 'Wanna see our works?',
		button: { text: 'all projects', link: `${base}works` },
	},
	skills: {
		heading: 'Here are some of our great skills',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.',
	},
};
export const works = {
	header: {
		image: `url(${PUBLIC_URL}/images/works/tattoo.jpg)`,
		heading: 'Our works.',
	},
	content: {
		heading: 'Our Works.',
		description: 'See all our works',
		columns: [
			{
				image: `url(${PUBLIC_URL}/images/works/item1.jpg)`,
				heading: 'Arhitecture',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item2.jpg)`,
				heading: 'Photography',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item3.jpg)`,
				heading: 'Teaser',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item4.jpg)`,
				heading: 'Styles',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item5.jpg)`,
				heading: 'About',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item6.jpg)`,
				heading: 'Names',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item7.jpg)`,
				heading: 'Titles',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item8.jpg)`,
				heading: 'Something',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item9.jpg)`,
				heading: 'Reaction',
			},
			{
				image: `url(${PUBLIC_URL}/images/works/item10.jpg)`,
				heading: 'Miscelanious',
			},
		],
	},
};
export const about = {
	header: {
		image: `url(${PUBLIC_URL}/images/about/office.jpg)`,
		heading: 'About us.',
	},
	skills: {
		heading: 'Here are some of our great skills',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien.',
		image: `url(${PUBLIC_URL}/images/about/phone.jpg)`,
	},
	video: {
		image: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
		heading: 'Best Solutions for Your Business',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.',
		button: { text: 'Watch video' },
	},
	team: {
		heading: 'Meet our team.',
		description: 'the best people to support your project',
	},
};
export const contact = {
	header: {
		image: `url(${PUBLIC_URL}/images/map.jpg)`,
		heading: 'Contact us.',
	},
	content: {
		heading: 'Get in touch with us!',
		description: 'Lorem ipsum dolor sit amet',
		columns: {
			column1: {
				heading: 'PHONE',
				buttons: {
					button1: {
						text: '+1234567890',
						link: 'tel:1234567890',
					},
					button2: {
						text: '+0987654321',
						link: 'tel:0987654321',
					},
				},
			},
			column2: {
				heading: 'ADDRESS',
				description:
					'Lorem ipsum dolor sit amet, consecteturadipiscing elit.',
			},
			column3: {
				heading: 'EMAIL',
				buttons: {
					button1: {
						text: 'anymail@mail.com',
						link: 'mailto:anymail@mail.com',
					},
					button2: {
						text: 'officialmail@mail.com',
						link: 'mailto:officialmail@mail.com',
					},
				},
			},
		},
	},
	form: {
		heading: 'Send us a message!',
		description: 'Lorem ipsum dolor sit amet',
	},
};
