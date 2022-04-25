const Sector = require('../../Models/sector.model')

async function getSector (req, res) {
  try {
    const sectors = await Sector.find().populate('company')
    if (sectors.length > 0) {
      return res.status(200).json(sectors)
    } else {
      return res.status(400).json('sector can not found')
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function createSector (req, res) {
  try {
    const newSector = await new Sector(req.body).save()
    if (newSector) {
      return res.status(200).json(newSector)
    } else {
      return res.status(400).json('Can not create sector')
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function updateSector (req, res) {
  try {
    const { id } = req.params
    const updatedSector = Sector.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    if (updatedSector) return res.status(200).json(updatedSector)
    else return res.status(500).json("Can't update")
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  getSector,
  createSector,
  updateSector
}
