export const formsArray = [
	{
		name: 'nombre',
		type: 'text',
		longName: 'Nombre'
	},
	{
		name: 'rol',
		type: 'text',
		longName: 'Apellido'
	}
];

// Forms Data
export const nestedForms = [
	{
		name: 'nombre',
		type: 'text',
		longName: 'Nombre',
		stateKey: 'datos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'apellido',
		type: 'text',
		longName: 'Apellido',
		stateKey: 'datos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'email',
		type: 'email',
		longName: 'Apellido',
		stateKey: 'datos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'password',
		type: 'password',
		longName: 'Apellido',
		stateKey: 'datos',
		isNested: true // Need to optimize in WithForms
	}
];

// Table Data

export const headers = [
	{ name: 'Nombre Rol', selector: 'email' },
	// { name: 'Activo', selector: 'nombre' },
	// { name: 'Acciones', selector: 'apellido' }
];
