import { PUBLIC_URL } from '~/constants/contacts';
export const contacts = [
	{
		name: 'John Smith',
		image: `url(${PUBLIC_URL}/contact1.jpg)`,
		socialMedia: {
			facebook: 'https://facebook.com',
			instagram: 'https://instagram.com',
		},
		job: 'Web developer',
		adress: 'Main street nb.9',
		city: 'Craiova',
		country: 'Romania',
		birthday: 1994,
	},
	{
		name: 'John Doe',
		image: `url(${PUBLIC_URL}/contact2.jpg)`,
		socialMedia: {
			facebook: 'https://facebook.com',
			instagram: 'https://instagram.com',
		},
		job: 'Front-end',
		adress: 'Main street nb.16',
		city: 'Iasi',
		country: 'Romania',
		birthday: 1991,
	},
	{
		name: 'Jane Dam',
		image: `url(${PUBLIC_URL}/contact3.jpg)`,
		socialMedia: {
			facebook: 'https://facebook.com',
			instagram: 'https://instagram.com',
		},
		adress: 'Second street nb.54',
		city: 'Suceava',
		country: 'Romania',
		birthday: 1989,
	},
	{
		name: 'Michael Das',
		image: `url(${PUBLIC_URL}/contact4.jpg)`,
		socialMedia: { instagram: 'https://instagram.com' },
		job: 'Designer',
		adress: 'Ralph Dimson nb.23',
		city: 'Constanta',
		country: 'Romania',
	},
	{
		name: 'Mikaela Roberta',
		image: `url(${PUBLIC_URL}/contact5.jpg)`,
		socialMedia: {
			facebook: 'https://facebook.com',
			instagram: 'https://instagram.com',
		},
		city: 'Focsani',
		country: 'Romania',
	},
	{
		name: 'Duncan Smith',
		image: `url(${PUBLIC_URL}/contact6.jpg)`,
		socialMedia: {
			facebook: 'https://facebook.com',
		},
		city: 'Iasi',
		country: 'Romania',
		birthday: 1985,
	},
];
