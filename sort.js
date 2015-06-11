function doAll(){
  var x = document.getElementById("inputparagraph").value;
  sort(x);
}
function sort(paragraph){
  var array = paragraph.split(" ");
  var sentenceArray = paragraph.split(".");
  for(var k = 0; k < array.length; k++){
  	array[k] = [array[k], 1];
  }
  for(var i = 0; i < array.length; i++){
    for(var j = i+1; j < array.length; j++){
      if(array[i][0].toUpperCase() == array[j][0].toUpperCase()){
          console.log(i + ", " + j);
          array[i][1] += 1;
          array.splice(j, 1);
          j-=1;
      }
    }
  }
  sort2D(array);
  shorten2D(array);
  var y = [];
  var x = findSentences(array, sentenceArray);
  for(var l = 0; l < x.length; l++){
    y.push(x[l][0]);
  }
  return y.join(".");
}
function findSentences(array, sentenceArray){
  var x = [];
  for (var i = 0; i < sentenceArray.length; i++) {
    for(var j = 0; j < array.length; j++){
      if(sentenceArray[i].indexOf(array[j][0]) > -1){
        x.push(sentenceArray[i]);
      }
    }
  }
  console.log(sentenceArray + array);
  sortSentences(x);
  return x;
}
function sortSentences(array){
  for(var k = 0; k < array.length; k++){
    array[k] = [array[k], 1];
  }
  for(var i = 0; i < array.length; i++){
    for(var j = i+1; j < array.length; j++){
      if(array[i][0].toUpperCase() == array[j][0].toUpperCase()){
          console.log(i + ", " + j);
          array[i][1] += 1;
          array.splice(j, 1);
          j-=1;
      }
    }
  }
  sort2D(array);
  return array;
}
function shorten2D(array){
  for(var i = 0; i < array.length; i++){
    if(array[i][1] < 2){
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
function sort2D(array){
  for(var i = 0; i < array.length; i++){
    for(var j = i+1; j < array.length; j++){
      if(array[j][1] > array[i][1]){
        var x = array[j];
        var y = array[i];
        array[i] = x;
        array[j] = y;
      }
    }
  }
  return array;
}
// noprotect
