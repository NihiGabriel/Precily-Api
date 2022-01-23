const ErrorHandler = require('../utils/errorHandler.util');
const asyncHandler = require('../middlewares/async.mw');
const User = require('../models/User.model');

exports.newUser = asyncHandler(async (req, res, next) => {

    const {name, email, subject, message } = req.body;

    if(!name){
        return next(new ErrorResponse('Error', 400, ['name is required']));
    }

    
    if(!email){
        return next(new ErrorResponse('Error', 400, ['email is required']));
    }

    // validate existing email
    const isExist = await User.findOne({ email: email});

    if(isExist){
        return next(new ErrorResponse('Error', 400, ['email already exist please enter a new email']));
    }

    // create user
    const user  = await User.create({
        name,
        email,
        subject,
        message
    });

    res.status(200).json({
        errors: [],
        error: false,
        data: user,
        message: 'successful',
        status: 200
    })
});

exports.newUser = asyncHandler(async (req, res, next) => {

    
    const {name, email, subject, message } = req.body;

    if(!name){
        return next(new ErrorResponse('Error', 400, ['name is required']));
    }

    
    if(!email){
        return next(new ErrorResponse('Error', 400, ['email is required']));
    }

    // validate existing email
    const isExist = await User.findOne({ email: email});

    if(isExist){
        return next(new ErrorResponse('Error', 400, ['email already exist please enter a new email']));
    }

});