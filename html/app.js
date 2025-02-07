import express from "express"
import path from "path";
import { fileURLToPath } from "url";

const __filename =fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express () 
const PORT =5003
app.use(express.static(path.join(__dirname,dist)))

app.get("/meraj",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello Meraj!!"})
    } catch (error) {
       res.status(500).json({msg:error}) 
    }
})

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname, dist ,"index.html"))
})

app.listen(PORT,()=> {
    console.log("SErver is up and running ")
})
































