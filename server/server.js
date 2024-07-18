import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { cwd } from "node:process"
import path from "node:path";

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(cwd(), "./views/")))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(), './views/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} Port`)
})
