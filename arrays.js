var chocolateBars = ["snickers", "hundred grand", "kitakt", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return(newArray)
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return(array)
}
function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return(newArray)
}
function destructivelyAddElementToEndgOfArray(array, element) {
  array.push(element)
  return(array)
}
function accessElementInArray(array, index) {
  return(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return(array.shift())
}
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return(newArray)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return(array.pop())
}
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1)
  return(newArray)
}