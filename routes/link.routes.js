const {Router} = require('express')
const config = require('config')
const { nanoid } = require('nanoid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const {from} = req.body

    const existing = await Link.findOne({from})

    let code = '7yl2uPo0JJF0ZSI6B0toQ123456'
    const overlap = await Link.findOne({code})
    if (overlap) {
      code = nanoid(40)
    }

    const to = baseUrl + '/t/' + code

    const link = new Link({
      code, to, from, owner: req.user.userId
    })

    await link.save()

    res.status(201).json({link})

  } catch (error) {
    res.status(500).json({message: 'Something went wrong, please try again'})
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({owner: req.user.userId})
    res.json(links)
  } catch (error) {
    res.status(500).json({message: 'Something went wrong, please try again'})
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (error) {
    res.status(500).json({message: 'Something went wrong, please try again'})
  }
})

module.exports = router