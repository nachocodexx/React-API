import User from '../models/user';

const getDrivers=(req,res)=>{
  User.find({},(err,users)=>{
    res.json(users);
  });
}

const createDriver=(req,res)=>{
  let body=req.body;

  let user=new User({
    first_name:body.first_name,
    last_name:body.last_name,
    age:body.age
  });

  user.save((err,result)=>{
    if(err) res.status(500).send(err);
    res.sendStatus(200);
  });
}


const deleteDriver=(req,res)=>{
  User.remove({_id:req.params.id},err=>{
    if(err) console.log(err);
    res.sendStatus(200);
  });
}

const updateDriver=(req,res)=>{
  let b=req.body;

  User.findOneAndUpdate({_id:req.params.id},{first_name:b.first_name,last_name:b.last_name,age:b.age},{upsert:true},(err,user)=>{
    if(err){
      console.log(err.errors['age'].message);
      return res.status(500).send(err);
    }
    return res.sendStatus(200)
  });

}

module.exports={
  getDrivers,
  createDriver,
  deleteDriver,
  updateDriver
}
