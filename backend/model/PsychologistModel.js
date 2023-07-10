import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const PsychologistSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "firstname can't be blank"],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, "lastName can't be blank"],
            trim: true,
        },
        image: {
            type: String,
            default: null
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            trim: true,
            required: [true, "Email can't be blank"],
            index: true,
            validate: [isEmail, "invalid email"],
        },
        password: {
            type: String,
            required: [true, "Password can't be blank"],
            trim: true,
        },
        specialization: {
            type: String
        },
        expertise: {
            type: Array
        },
        experience: {
            type: String
        },
        qualification: {
            type: String
        },
        availability: {
            type: String
        },
        userType: {
            type: String,
            default: "expert"
        },

        token: {
            type: String,

        },

    },
    { minimize: false, timestamps: true }

);

// login logic
PsychologistSchema.statics.findByCredentials = async function (email, password) {
    const user = await Psychologist.findOne({ email });
    if (!user) {
        throw new Error("Unable to login");
    }

    // Compare the password directly (without bcrypt)
    if (user.password !== password) {
        throw new Error("Unable to login");
    }

    console.log("Welcome");

    return user;
};


const Psychologist = mongoose.model("Psychologist", PsychologistSchema);
export default Psychologist;
