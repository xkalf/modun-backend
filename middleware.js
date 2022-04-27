const User = require('./Models/user.model')

const checkPermission = (permissionId) => {
  return async (req, res, next) => {
    const user = await User.findById(req.body.user)
    if (!user) return res.status(500).json('user not found')
    if (user.permission.includes(permissionId)) {
      delete req.body.user
      next()
    } else {
      return res.status(500).json('You are not allowed')
    }
  }
}

module.exports = {
  checkPermission
}
