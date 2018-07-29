const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
    userName: {},
    email:{},
    password:{},
    age:{
        type: Number,
        min: [18, 'Must be 18 to post'],
        required: [true]
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    }
})
//custom validation from mongoose docs
let User = db.model('user', userSchema);
let user = new User();
let error;

user.phone = '555.0123';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
    '555.0123 is not a valid phone number!');

user.phone = '';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
    'User phone number required');

user.phone = '201-555-0123';
// Validation succeeds! Phone number is defined
// and fits `DDD-DDD-DDDD`
error = user.validateSync();
assert.equal(error, null);


module.exports = UserSchema