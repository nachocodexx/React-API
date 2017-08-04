import express from 'express';
const app=express();
import path from 'path';
import API from '../routes/APIRoutes';
import bodyParser from 'body-parser';
app.use(express.static(path.join(__dirname,'..','public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',API);




module.exports=app;
