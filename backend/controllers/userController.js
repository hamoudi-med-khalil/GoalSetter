// @desc Register New User
// @route POST /api/users
// access Public

const registerUser = (req, res) =>{
    res.json({message : 'Register User'})
}



// @desc Authenticate user
// @route Get /api/users/login
// access Public

const loginUser = (req, res) =>{
    res.json({message : 'Login User'})
}
// @desc Get  User data
// @route Get /api/users/me
// access Public

const getMe = (req, res) =>{
    res.json({message : ' User Data display'})
}

module.exports = {
    registerUser, loginUser, getMe
}