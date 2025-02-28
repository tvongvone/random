import mongoose from 'mongoose'
const { Schema } = mongoose

const ProfileSchema = new Schema({ // first argument is the document that we are shaping in this case the profile
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    work_history: {
        type: String
    },
    portfolio: {
        type: String
    },
    education: {
        type: String
    },
    skills: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    accomplishments: {
        type: String
    },


}, {
    timestamps: true
}) // Second argument is extra options


export const Profile = mongoose.model('Profile', ProfileSchema) // first argument is the model name, second is the schema
