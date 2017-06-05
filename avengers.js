
const api = require('marvel-api') 
const program = require('commander')
const colors = require('colors')

let marvel = api.createClient({
  publicKey: '3ffd0da969c4817bd34a1fb7219d0707',
  privateKey: '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
  })

class Avengers {
  getAvengers() {
    marvel.characters.findByName('thor')
    .then((res) => {console.log('\n'+colors.gray(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
    marvel.characters.findByName('spider-man')
    .then((res) => {console.log('\n'+colors.red(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
    marvel.characters.findByName('Iron Man')
    .then((res) => {console.log('\n'+colors.cyan(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
    marvel.characters.find('1009220')
    .then((res) => {console.log('\n'+colors.blue(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
    marvel.characters.find('1009351')
    .then((res) => {console.log('\n'+colors.green(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
    marvel.characters.findByName('vision')
    .then((res) => {console.log('\n'+colors.magenta(res.data[0].name + ' : ' + res.data[0].description+ '\n'))})
    .fail(console.error)
    .done()
  }
}
module.exports = Avengers

