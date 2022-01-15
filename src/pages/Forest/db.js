import { PUBLIC_URL } from '~/constants/forest';
export const home = {
	header: {
		image: `url(${PUBLIC_URL}/header.jpg)`,
		logo: `${PUBLIC_URL}/logo.png`,
		heading: 'Wanderlust',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci accumsan, tincidunt velit eget, consequat ante. Duis in nisi ultrices, eleifend velit sit amet, venenatis mi. Sed sed nisi orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
		socialMedia: [
			{
				icon: 'fab fa-facebook-f',
				link: 'https://facebook.com',
			},
			{
				icon: 'fab fa-instagram',
				link: 'https://instagram.com',
			},
			{
				icon: 'fab fa-pinterest-p',
				link: 'https://pinterest.com',
			},
		],
	},
	content: [
		{
			type: 'info',
			heading: 'a unique 1 week adventure',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus. Duis viverra elit et dolor lobortis, et egestas erat vestibulum.',
		},
		{
			type: 'columns-3',
			columns: [
				{
					image: `url(${PUBLIC_URL}/forest1.jpg)`,
					caption: 'Lorem ipsum dolor sit amet',
				},
				{
					image: `url(${PUBLIC_URL}/forest2.jpg)`,
					caption: 'Lorem ipsum dolor sit amet',
				},
				{
					image: `url(${PUBLIC_URL}/forest3.jpg)`,
					caption: 'Lorem ipsum dolor sit amet',
				},
			],
		},
		{
			type: 'info',
			heading: 'our satisfied adventurers',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus. Duis viverra elit et dolor lobortis, et egestas erat vestibulum.',
		},
		{
			type: 'testimonials',
			image: `url(${PUBLIC_URL}/content1.jpg)`,
			items: [
				{
					description:
						'Nulla sed ultrices ex. Nulla neque sem, convallis ut lorem sit amet, interdum tristique mauris. Phasellus et turpis ornare, congue dui nec, condimentum mi. Maecenas id elit id eros mattis vulputate. Nunc venenatis convallis lorem condimentum facilisis. In sagittis elit elit. Quisque commodo, nibh a elementum finibus, massa nunc tempor nisl, et rhoncus nibh augue a nisl.',
					name: 'John Doe',
					position: 'Web developer',
				},
				{
					description:
						'Maecenas in facilisis velit, vitae sollicitudin risus. Donec mollis, ante mollis tempus suscipit, enim nibh dictum lacus, ac tempor leo mi sed ante. Morbi non nulla eu mauris scelerisque venenatis quis at est. Aliquam eleifend ante vehicula ipsum vehicula, non imperdiet lectus suscipit. Quisque posuere malesuada erat, id luctus lacus luctus in.',
					name: 'Mark Beans',
					position: 'Web developer senior',
				},
			],
		},
		{
			type: 'columns-2',
			heading: 'book your next adventure now',
			paragraphs: [
				'Nullam porta massa arcu, id elementum diam sagittis vel. Pellentesque ac enim metus. Nullam ut augue vel metus vehicula egestas nec sit amet sapien. Donec tempor pellentesque semper. Sed a metus interdum, pulvinar ipsum mattis, suscipit est. Donec vulputate eros ex, eget pretium nisl maximus ut. Cras venenatis justo felis, vel malesuada erat porttitor in. Suspendisse non ultrices velit.',
				'Maecenas massa nulla, aliquet a mi eget, porttitor interdum tortor. Nunc purus arcu, bibendum eu arcu et, maximus auctor nisi. Curabitur maximus auctor ex eu bibendum. Nullam scelerisque luctus velit, ut posuere nibh ultrices sit amet.',
			],
			image: `url(${PUBLIC_URL}/content2.jpg)`,
		},
	],
	footer: {
		copyright: 'Copyright A. Mocanu 2022',
	},
};
