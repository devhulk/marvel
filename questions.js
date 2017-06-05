
const readline = require('readline')
const Avengers = require('./avengers')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
  exports.whosInTheAvengers = () => {
    rl.question('Hello, would you like to know the current members of the Avengers?(yes or no) ', (answer) => {
    if(answer == 'yes') {
      let avengers = new Avengers()
      avengers.getAvengers()}
    else {
      console.log('Ok then, have a great day')
    }
    rl.close();
  })
  }

