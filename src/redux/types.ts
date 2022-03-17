export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	memberSince: string;
	dateOfBirth: string;
	insurance: string;
	img: string;
}

export interface Doctor {
	cell: string;
	dob: {
		age: number;
		date: string;
	};
	email: string;
	gender: string;
	id: {
		name: string;
		value: string;
	};
	location: {
		city: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		country: string;
		postcode: string;
		state: string;
		street: {
			number: number;
			name: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	login: {
		uuid: string;
		username: string;
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
	nat: string;
	phone: string;
	picture: {
		large: string;
		medium: string;
		small: string;
	};
	registered: { date: string; age: number };
}

export interface Appointment {
	id: string;
	title: string;
	date: string;
	time: string;
	user: string;
	doctor?: string;
	description?: string;
}
