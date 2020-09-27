const mongoose = require('mongoose');

const connect = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        })

        console.log('Connected to DB: %s', conn.connection.host);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect;