// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendDriver (name) {
  drivers.push(name) 
}
function destructivelyPrependDriver (name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver (name) {
  drivers.pop(name)
}
function destructivelyRemoveFirstDriver (name) {
  drivers.shift(name)
}
const newDrivers = drivers.slice()
function appendDriver(name) {
  drivers.push(name)
}