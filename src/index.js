let express = require('express')
const route  = require('./router/route')
const mongoose = require('mongoose')
let app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://mohits8962:m26u72h8@digital_agriculture_assignment-database.f1gfhiv.mongodb.net/digital_agriculture_assignment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)

app.listen(3000 , () => {
    console.log('Server running on 3000 port');
})