const express = require('express');
const router = express.Router();


const contact = []

//get
router.get('/', (req, res, next) => {
    res.status(200).json({
        contact
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'hello this is first dynamic route',
        id
    })
})

router.get('/:id', (req, res, next) => {
    res.json({
        message: 'i am single person'
    })
})

router.put('/:id', (req, res, next) => {
    res.json({
        message: 'i am put route'
    })
})

router.delete('/:id', (req, res, next) => {
    res.json({
        message: 'i am a delete route'
    })
})

//post

router.post('/', (req, res, next) => {
    contact.push({
        name:req.body.name,
        email:req.body.email
    })
  
    res.status(200).json({
        message: 'data save',
    })
})
module.exports = router;