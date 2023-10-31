const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }

  if (!req.body.city) {
    req.body.city = 'Anytown'
  }

  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
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
  let id =  Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    let place = places[req.params.id]
    res.render('places/show', {
      place: place,
      index: id
    })
  }
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