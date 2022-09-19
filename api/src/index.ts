import app from "./app"

const { PORT = 5550} = process.env


app.listen(PORT, ()=>{
    console.log("ejecutando.....")
})
