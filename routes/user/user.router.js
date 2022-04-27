const { createUser, getUser, AddPermission } = require('./user.controller')

const router = require('express').Router()

router.get('/', getUser)
router.post('/', createUser)
router.put('/:id', AddPermission)

module.exports = router
