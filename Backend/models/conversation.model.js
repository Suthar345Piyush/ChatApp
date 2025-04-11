import  mongoose from 'mongoose';
import Message from '../models/message.model.js';
import  User from '../models/user.model.js';

const  conversationSchema  = new mongoose.Schema(
   {
     members : [
       {
         type : mongoose.Schema.Types.ObjectId,
         ref : User,
       },
     ],

     messages : [
       {
         type : mongoose.Schema.Types.ObjectId,
         ref : Message,
         default : [],
       },
     ],
   },
   {timeStamps : true}
);

const  Conversation = mongoose.model("conversation" , conversationSchema);

export default Conversation;

