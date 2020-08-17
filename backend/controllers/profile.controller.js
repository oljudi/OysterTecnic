const User = require('../models/User')

exports.profileView = async (req, res, next) => {
    const { user } = req
    const userInfo = await User.findById(user._id)
    if(!userInfo) {
        res.status(404).json({success: false, msg: 'Usuario no encontrado'})
    } else {
        res.status(200).json({success: true, userInfo})
    }
}

exports.dashboards = (req, res, next) => {

}