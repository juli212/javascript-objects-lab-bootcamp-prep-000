var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  const prop = {[key]: value}
  var newObject = Object.assign({}, prop)
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