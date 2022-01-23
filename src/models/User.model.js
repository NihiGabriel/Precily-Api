const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
       name: {
           type: String
       },

       email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email already exist'],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'a valid email is required',
        ],
      },

    }
)

module.exports = mongoose.model('User', UserSchema);