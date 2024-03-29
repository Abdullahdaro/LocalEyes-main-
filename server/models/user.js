import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String },
    googleId : {type: String},
    saved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post Message",
        }
    ],
});

const User = mongoose.model("User", userSchema)

export default User;


