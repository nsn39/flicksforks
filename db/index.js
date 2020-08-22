const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dmwnishan:tendamagic@cluster0-zimwi.mongodb.net/flicksforks?retryWrites=true&w=majority'
        , {useNewUrlParser: true, useUnifiedTopology:true}
    ).catch(e => {
        console.log('Error received: ', e);
    })

mongoose.pluralize(null);
const db = mongoose.connection;
mongoose.connection.on('connected', () => {
    console.log('MongoDB is alright!');
})
module.exports = db;