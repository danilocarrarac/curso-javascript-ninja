
(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?

	var person = {
		'name':'Danilo',
		'lastname':'Angelim',
		'age': '28'
	}


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

console.log( 'Propriedades de "person":',Object.keys(person));


/*
Crie um array vazio chamado `books`.
*/
// ?

var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

	var livro1 =  {
		'name':`O grito`,
		'pages':400
	}

	var livro2 = {
		'name':`Comer e Beber`,
		'pages':250
	}

	var livro3 = {
		'name':`Mobidick`,
		'pages':300
	}

	books.push(livro1, livro2, livro3)
		
		

// ?
console.log( '\nLista de livros:', books );

/*
Mostre no console todos os livros.
*/
// ?

console.log( '\nLivro que está sendo removido:', books.pop());
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log( '\nAgora sobraram somente os livros:', books );
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/

var booksTest = JSON.stringify(books);
// ?


/*
Mostre os livros nesse formato no console:
*/
// ?
console.log( '\nLivros em formato string:', booksTest );
/*
Converta os livros novamente para objeto.

*/

//booksTest = JSON.parse(books);
// ?
console.log( '\nAgora os livros são objetos novamente:', booksTest );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

console.log('Livros no formato ', Object.keys(books) )

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?


var myName =[];
myName.push('D');
myName.push('a');
myName.push('n');
myName.push('i');
myName.push('l');
myName.push('o');


console.log( '\nMeu nome é:', myName.join(''));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:', myName.reverse('') );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' , myName.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

})()
