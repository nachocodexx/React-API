import config from './config';
import mongoose from 'mongoose';
import app from './app';
mongoose.Promise = global.Promise;


mongoose.connect(config.db,{useMongoClient:true}).
  then(()=>{
    console.log("CONNECT MONGO DB!");
    app.listen(config.port,'0.0.0.0',()=>{
      console.log("WORKS");
    });
  }).
  catch(err=> console.log(err));
