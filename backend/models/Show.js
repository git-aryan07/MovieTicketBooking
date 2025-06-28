import mongoose, { Schema } from "mongoose";

const Showschema=new Schema({

    movie:{type:String,required:true, ref:'Movie'},
    showDateTime :{type:Date,required:true},
    showPrice:{type:Number,required:true},
    occupiedSeats:{type:Object,default:{}}

},{minimize:false}) // minimize allows ocuupied seats to initialize with default empty object


const Show=mongoose.model('Show',Showschema);

export default Show;

// modules.export={
//     Show
// }