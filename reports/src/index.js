const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000|| process.env.PORT
require("./db/mongoose")
app.use(express.json())
app.use(cors())
const newsRouter = require("./router/news")
app.use(newsRouter)
const reporterRouter = require("./router/reporter")
app.use(reporterRouter)

app.listen(port,()=>{
    console.log("server is running..........")
})


