const config={
  db:process.env.MONGODB ||'mongodb://localhost:27017/reactapi',
  port:process.env.PORT || 8000,
}

module.exports=config;
