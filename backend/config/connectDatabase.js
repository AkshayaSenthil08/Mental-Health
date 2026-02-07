const mongoose=require("mongoose")
const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("database Connected!")
})
}
module.exports=connectDatabase;