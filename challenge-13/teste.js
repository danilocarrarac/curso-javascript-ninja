
var arr = [1,2,3,4,5];

var map = arr.map(function(item, index, array){
 var num = 0;
	return  num = num +1;
});

console.log('Array: ', arr + ' Item', map);

// O .map consegue mapear o array no sentido de construir um novo array a partir de um de refenrencia
// podendo este tomar uma açao de soma ou qualquer outra coisa de acordo com o array que ele possui
// O Map na vdd funciona como se fosse um for each.Porem sem a syntax estranha do mesmo.

/*

	 A grande diferença do MAP para o FOREACH é a de que o MAP percorre todo o array e retorna um Array
	 já o FOREACH 


implementaçao

	o forEach sera necessario quando precisarmor percorrer um array e fazer qualquer outra acáo com o mesmo
	JA o MAP ira iterar em cima de um Array porem o mesmo ira gerar um outro array.
 
*/


// Syntax do FOREACH

var newArray = [];

	arr.forEach(function (item, index, array) {

		newArray.push({index:index ,item:item });

	});

	console.log('newArray');
	console.log(newArray);