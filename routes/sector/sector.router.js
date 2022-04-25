const router = require('express').Router()
const { getSector, createSector, updateSector } = require('./sector.controller')

router.get('/', getSector)
router.post('/', createSector)
router.put('/:id', updateSector)

module.exports = router
