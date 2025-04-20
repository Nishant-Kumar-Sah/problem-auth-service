const Mongoose =  require('mongoose')
const UserSchema = new Mongoose.Schema({
    FirstName: {
        type: String,
        required : [true, 'First Name Cannot be empty']
    },
    LastName: {
        type: String
    },
    UserName: {
        type: String,
        required: [true, 'Username Cannot be empty']
    },
    Email : {
        type: String,
        required: [true, "Email Cannot be empty"]
    },
    Password: {
        type: String,
        required: [true, "Password Cannot be empty"]
    }
});

const User = Mongoose.model('User', UserSchema)
module.exports = User