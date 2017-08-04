import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema=new Schema({
  photo:String,
  first_name:String,
  last_name:String,
  age:{type:Number, min:[18,'You need to be 18!'],integer:true}
});


UserSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

UserSchema.pre('save',function (next) {
  let user=this;
  user.photo=`https://api.adorable.io/avatars/200/${user.first_name.replace(' ','_')}`
  next();
});


module.exports=mongoose.model('User',UserSchema);
