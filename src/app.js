import express from "express";
import router from "./routes/employes.routes.js";


const app = express()
app.use(express.json())

//-----------------------------Elementos--------------------------------------//
app.use(router)


app.use((req, res, next)=>{
  res.status(404).json({
    message:"Not found"
  })
})




export default app