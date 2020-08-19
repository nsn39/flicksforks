const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dmwnishan:tendamagic@cluster0-zimwi.mongodb.net/flicksforks?retryWrites=true&w=majority'
        , {useNewUrlParser: true, useUnifiedTopology:true}
    ).catch(e => {
        console.log('Error received: ', e);
    })

const db = mongoose.connection;
module.exports = db;