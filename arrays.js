
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



/*
  function addElementToBeginningOfArray ([array], add) {
    var arrays = [add, array];
    return arrays;
  }
*/
var array = [];
function addElementToBeginningOfArray(array,element){
    array.unshift(element);
    return array;
}
