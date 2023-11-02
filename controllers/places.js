const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

router.get('/', (req, res) => {      
    db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.delete('/:id', (req, res) => {
  let id =  Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.param.id)
  .then(place => {
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
    places[id] = req.body
    places[id] = { ...places[id], ...req.body }
    res.redirect(`/places/${id}`)
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('Error404')
  } else if (!places[id]) {
      res.render('Error404')
  } else {
      let place = places[req.params.id]
      res.render('places/Edit', { 
          place: place,
          index: id
      })
  }
})



router.post('/:id/edit', (req, res) => {
  res.send('Creat a rant about a particular place')
})

router.delete('/id/:rantId', (req, res) => {
  res.send('Delete a rant about a particular place')
})

module.exports = router

