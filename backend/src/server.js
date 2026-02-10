import express from "express";
import router from "./routes/notesRoutes.js";
import cors from 'cors';
import dotenv from 'dotenv';


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT  || 5001;

//Middleware

app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(express.json())
app.use(ratelimiter)



app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});
})
