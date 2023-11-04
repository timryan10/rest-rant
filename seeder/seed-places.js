const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant-tables.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-pic.jpg'
}])
.then(() => {
    console.log('Succes!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})