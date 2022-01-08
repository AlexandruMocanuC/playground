import { PUBLIC_URL } from '~/constants/travel';
export const continents = [
	{
		name: 'Asia',
		countries: [
			{
				flag: `url(${PUBLIC_URL}/flags/China.jpg)`,
				image: `url(${PUBLIC_URL}/images/China.jpg)`,
				name: 'China',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Beijing.jpg)`,
						name: 'Beijing',
					},
					{
						image: `url(${PUBLIC_URL}/images/Shanghai.jpg)`,
						name: 'Shanghai',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/India.jpg)`,
				image: `url(${PUBLIC_URL}/images/India.jpg)`,
				name: 'India',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Mumbai.jpg)`,
						name: 'Mumbai',
					},
					{
						image: `url(${PUBLIC_URL}/images/Chenai.jpg)`,
						name: 'Chenai',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/Indonezia.jpg)`,
				image: `url(${PUBLIC_URL}/images/Indonezia.jpg)`,
				name: 'Indonezia',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Surabaya.jpg)`,
						name: 'Surabaya',
					},
					{
						image: `url(${PUBLIC_URL}/images/Bekasi.jpg)`,
						name: '	Bekasi',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/Pakistan.jpg)`,
				image: `url(${PUBLIC_URL}/images/Pakistan.jpg)`,
				name: 'Pakistan',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Karachi.jpg)`,
						name: 'Karachi',
					},
					{
						image: `url(${PUBLIC_URL}/images/Faisalabad.jpg)`,
						name: 'Faisalabad',
					},
				],
			},
		],
	},
	{
		name: 'Europe',
		countries: [
			{
				flag: `url(${PUBLIC_URL}/flags/Romania.jpg)`,
				image: `url(${PUBLIC_URL}/images/Romania.jpg)`,
				name: 'Romania',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Constantza.jpg)`,
						name: 'Constanta',
					},
					{
						image: `url(${PUBLIC_URL}/images/Vaslui.jpg)`,
						name: 'Vaslui',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/France.jpg)`,
				image: `url(${PUBLIC_URL}/images/France.jpg)`,
				name: 'France',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Paris.jpg)`,
						name: 'Paris',
					},
					{
						image: `url(${PUBLIC_URL}/images/Marseille.jpg)`,
						name: 'Marseille',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/Spain.jpg)`,
				image: `url(${PUBLIC_URL}/images/Spain.jpg)`,
				name: 'Spain',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Madrid.jpg)`,
						name: 'Madrid',
					},
					{
						image: `url(${PUBLIC_URL}/images/Barcelona.jpg)`,
						name: 'Barcelona',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/Germany.jpg)`,
				image: `url(${PUBLIC_URL}/images/Germany.jpg)`,
				name: 'Germany',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Stuttgart.jpg)`,
						name: 'Stuttgart',
					},
					{
						image: `url(${PUBLIC_URL}/images/Barcelona.jpg)`,
						name: 'Barcelona',
					},
				],
			},
		],
	},
	{
		name: 'Australia and Oceania',
		countries: [
			{
				flag: `url(${PUBLIC_URL}/flags/Australia.jpg)`,
				image: `url(${PUBLIC_URL}/images/Australia.jpg)`,
				name: 'Australia',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Sydney.jpg)`,
						name: 'Sydney',
					},
					{
						image: `url(${PUBLIC_URL}/images/Melbourne.jpg)`,
						name: 'Melbourne',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/NewZeeland.jpg)`,
				image: `url(${PUBLIC_URL}/images/NewZeeland.jpg)`,
				name: 'New Zeeland',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Auckland.jpg)`,
						name: 'Auckland',
					},
					{
						image: `url(${PUBLIC_URL}/images/Wellington.jpg)`,
						name: 'Wellington',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/Fiji.jpg)`,
				image: `url(${PUBLIC_URL}/images/Fiji.jpg)`,
				name: 'Fiji',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Suva.jpg)`,
						name: 'Suva',
					},
					{
						image: `url(${PUBLIC_URL}/images/Nadi.jpg)`,
						name: 'Nadi',
					},
				],
			},
			{
				flag: `url(${PUBLIC_URL}/flags/NewGuinea.jpg)`,
				image: `url(${PUBLIC_URL}/images/NewGuinea.jpg)`,
				name: 'Papua New Guinea',
				cities: [
					{
						image: `url(${PUBLIC_URL}/images/Lae.jpg)`,
						name: 'Lae',
					},
					{
						image: `url(${PUBLIC_URL}/images/Madang.jpg)`,
						name: 'Madang',
					},
				],
			},
		],
	},
];
