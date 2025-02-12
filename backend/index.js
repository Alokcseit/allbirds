import express from 'express';
import * as dotenv from "dotenv";
const app = express();
dotenv.config({
    path: "./.env",
  });
app.get('/', (req, res)=>
{
    res.send('Hello, World!');
})
app.listen(process.env.PORT, ()=>
{
    console.log(`Server is running on port ${process.env.PORT}`);
})