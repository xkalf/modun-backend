const User = require('../../Models/user.model')

const getUser = async (req, res) => {
  try {
    const users = await User.find().populate('permission')
    if (!users) return res.status(500).json('User not found')
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body).save()
    if (!newUser) return res.status(500).json('cant create')
    return res.status(200).json(newUser)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const AddPermission = async (req, res) => {
  try {
    const { id } = req.params
    const { permission } = req.body
    const user = await User.findById(id)
    user.permission = permission
    const savedUser = await user.save()
    return res.status(200).json(savedUser)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getUser,
  createUser,
  AddPermission
}
