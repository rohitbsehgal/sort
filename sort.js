function sort(paragraph){
var array = paragraph.split(" ");
for(var k = 0; k < array.length; k++){
	array[k] = [array[k], 1];
}
console.log(array);
for(var i = 0; i < array.length; i++){
  for(var j = 1; j < array.length; j++){
    if(array[i] == array[j]){
    	array.splice(j-1, 1);
    	array[i][1] += 1;
    }
  }
}
console.log(array);
}
