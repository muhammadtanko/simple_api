import express, { Express} from 'express';
import "./connection/mongo.connection"
import cors from "cors";
import userRoutes from "./routes/user.routes";
const app:Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/users",userRoutes);
console.log("hw fr nw");
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})