const mongoose = require('mongoose')
const { MONGO_URI } = process.env
exports.connect = () => {
     mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
     })
     .then(() => {
        console.log('MongoDB Connected')
     })
     .catch((error) => {
        console.log('MongoDB connect fail')
        console.error(error)
        process.exit(1)
     })
}