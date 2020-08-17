const User = require('../models/User')

exports.signUp = async (req, res, next) => {
    const { email, name, accountType, password } = req.body
    if(email === '' || password === ''){
        res.status(400).json({success: false, msg: 'Porfavor, llena todos los campos!!'})
    }
    
    const userOnDB = await User.findOne({email})
    if(userOnDB !== null){
        res.status(400).json({success: false, msg: 'Ya existe un usuario con este correo!!'})
    }

    User.register({email, name, accountType}, password)
        .then(user => res.status(201).json({success: true, msg:'Usuario creado satisfactoriamente', user}))
        .catch(err => res.status(500).json({success: false, msg:'Algo salio mal, intente de nuevo mas tarde', err}))
}

exports.logIn = async (req, res, next) => {
    const { user } = req
    res.status(200).json({success: true, user})
}

exports.logOut = (req, res) => {
    req.logout()
    res.status(200).json({success: true, msg: 'BAI BAI'})
}
