import express from "express";
import router from "./routes/notesRoutes.js";
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT  || 5001;
const __dirname = path.resolve()

//Middleware

if(process.env.NODE_ENV !== "production"){
  app.use(cors({
  origin:"http://localhost:5173"
}))
}
app.use(express.json())
app.use(ratelimiter)



app.use("/api/notes",notesRoutes);

//For deployment Only do if you want to push on production

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
};
//
connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});
})
