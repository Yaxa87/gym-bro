const mongoose = requrie('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// TODO: create profile schema for user
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})