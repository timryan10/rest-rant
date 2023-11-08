const router = require('express').Router()
//const places = require('../models/places.js')
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

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  for(const [key, value] of Object.entries(req.body)){
    if (!value) delete req.body[key]
  }
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation error!'
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', {message})
    }
    else {
      res.render('error404')
    }
  })
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
    db.Commment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })
})

//router.delete('/:id', (req, res) => {
//  let id =  Number(req.params.id)
//  if (isNaN(id)) {
//    res.render('error404')
//  }
//  else if (!places[id]) {
//   res.render('error404')
//  }
//  else {
//    places.splice(id, 1)
//    res.redirect('/places')
//  }
//})

//router.put('/:id', (req, res) => {
//  let id = req.params.id
//    places[id] = req.body
//    places[id] = { ...places[id], ...req.body }
//    res.redirect(`/places/${id}`)
//})

//router.get('/:id/edit', (req, res) => {
//  let id = Number(req.params.id)
//  if (isNaN(id)) {
//      res.render('Error404')
//  } else if (!places[id]) {
//      res.render('Error404')
//  } else {
//      let place = places[req.params.id]
//      res.render('places/Edit', { 
//          place: place,
//         index: id
//      })
//  }
//})

//router.post('/:id/edit', (req, res) => {
//  res.send('Creat a rant about a particular place')
//})

//router.delete('/id/:rantId', (req, res) => {
//  res.send('Delete a rant about a particular place')
//})

module.exports = router

