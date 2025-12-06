import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    Name:{
        type: String,
        required: false,
    },
    Email:{
        type:String,
        required: false,
    },
    Address:{
        type: String,
        required: false,
    },
    Income:{
        type: Number,
        required: false,
    },
    Number:{
        type: String,
        required: false,
    },
    id:{
        type: String,
        required: true,
    }
});

export const Booking = mongoose.model("Booking", schema);

export default Booking;