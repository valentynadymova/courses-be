import express from "express";
//import prisma from "./prisma";

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))