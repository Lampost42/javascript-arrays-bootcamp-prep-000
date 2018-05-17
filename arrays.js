function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return(newArray)
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return(array)
}
function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return(newArray)
}
function destructivelyAddElementToEndgOfArray(array, element) {
  array = [element, ...array]
  return(array)
}