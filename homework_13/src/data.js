let myAppValue = angular.module('data', []);

myAppValue.value('posts',[
	{ id: 0, 
		title: 'Tropic forest', 
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 
		categories: [ 'Forest', 'Nature', 'House'], 
		url: 'assets/pict1.jpg',
		isEditing: false },
	{ id: 1, 
		title: 'Macro mode', 
		description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 
		categories: [ 'Nature', 'Grass', 'Great sky'], 
		url: 'assets/pict2.jpg',
		isEditing: false },
	{ id: 2, 
		title: 'Sea side', 
		description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
		categories: [ 'Nature', 'Sea', 'Water'], 
		url: 'assets/pict3.jpg',
		isEditing: false }
]);