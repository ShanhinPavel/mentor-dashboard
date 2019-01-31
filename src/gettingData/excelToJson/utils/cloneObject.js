/*
*This function clone collection 
*This function takes some collection creates a new collection and
*by using array.forEach copies each property with value 
*/
function cloneTaskCollection(collection) {
  // take all prop from object and create array of properties
  const keys = Object.keys(collection); 
  const newTaskCollection = {};// Create new collection
  keys.forEach(element => { // Clone properties
    newTaskCollection[element] = collection[element];
  });
  return newTaskCollection;
}

module.exports = cloneTaskCollection; 