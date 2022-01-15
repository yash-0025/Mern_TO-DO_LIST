const mongoose = require("mongoose")


const Connection = async () => {
    const URL = `mongodb+srv://Yash:200403yp@cluster0.attg6.mongodb.net/toDolist?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser: true})
        console.log('Database connected successfully')
    }catch (error) {
        console.log('Error connecting with database.')
    }
} 

module.exports = Connection