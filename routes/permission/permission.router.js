const { getPermission, createPermission } = require('./permission.controller')

const router = require('express').Router()

router.get('/', getPermission)
router.post('/', createPermission)

module.exports = router
