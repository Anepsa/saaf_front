export var nestedForms = [
	{
		name: 'year',
		type: 'number',
		longName: 'Nombre',
		stateKey: 'meses',
		isNested: false // Need to optimize in WithForms
	}
];
for (let index = 1; index < 13; index++) {
	var form = new Object();
	form.name = index;
	form.type = 'number';
	// form.longName = index;
	form.stateKey = 'meses';
	form.isNested = true;
	nestedForms.push(form);
	//console.log(nestedForms);
}

// Table Data
//Needs to be made With Algorithm  that sorts data in format Month = Number
export const headers = [
	// { name: 'Year', year: '1' },
	{ name: 'Enero', selector: '1' },
	{ name: 'Febrero', selector: '2' },
	{ name: 'Marzo', selector: '3' },
	{ name: 'Abril', selector: '4' },
	{ name: 'Mayo', selector: '5' },
	{ name: 'Junio', selector: '6' },
	{ name: 'Julio', selector: '7' },
	{ name: 'Agosto', selector: '8' },
	{ name: 'Septiembre', selector: '9' },
	{ name: 'Octubre', selector: '10' },
	{ name: 'Noviembre', selector: '11' },
	{ name: 'Diciembre', selector: '12' }
];

// Forms Data
// export const nestedForms = [
// 	{
// 		name: 'year',
// 		type: 'number',
// 		longName: 'Nombre',
// 		stateKey: 'meses',
// 		isNested: false // Need to optimize in WithForms
// 	},
// 	{
// 		name: 'apellido',
// 		type: 'text',
// 		longName: 'Apellido',
// 		stateKey: 'meses',
// 		isNested: true // Need to optimize in WithForms
// 	},
// 	{
// 		name: 'email',
// 		type: 'email',
// 		longName: 'Apellido',
// 		stateKey: 'meses',
// 		isNested: true // Need to optimize in WithForms
// 	},
// 	{
// 		name: 'password',
// 		type: 'password',
// 		longName: 'Apellido',
// 		stateKey: 'meses',
// 		isNested: false // Need to optimize in WithForms
// 	}
// ];
