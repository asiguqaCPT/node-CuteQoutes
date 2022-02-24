const express = require("express")
const app = express()
const router = require("./routes/qoutes")

app.use(express.json())
app.use('/quotes/', router)

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})
