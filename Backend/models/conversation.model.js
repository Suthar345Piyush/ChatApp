import  mongoose from 'mongoose';
import Message from './message.model';
import  User from './user.model';

const  conversationSchema  = new mongoose.Schema(
   {
     members : [
       {
         type : mongoose.Schema.Types.ObjectId,
         ref : User,
       },
     ],

     message : [
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

