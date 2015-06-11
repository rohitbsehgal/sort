function sort(paragraph){
var array = paragraph.split(" ");
for(var k = 0; k < array.length; k++){
	array[k] = [array[k], 1];
}
for(var i = 0; i < array.length; i++){
  var x = i+1;
  if(i === 0){
    x = 1;
  }
  for(var j = x; j < array.length; j++){
    if(array[i][0] == array[j][0]){
    	console.log(array);
        console.log(i + ", " + j);
        array[i][1] += 1;
        array.splice(j, 1);
        console.log(array);
        j-=1;
    }
  }
}
return array;
}
