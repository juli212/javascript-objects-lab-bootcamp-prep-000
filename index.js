var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var prop = {[key]: value}
  var newObject = Object.assign({}, object, prop)
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromOjbectByKey(object, key) {
  
  return object
}

function destructivelyDeleteFromOjbectByKey(object, key) {
  
  return object
}