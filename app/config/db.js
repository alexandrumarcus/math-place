const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
            .then(client => {
                console.log('Connected to Database')
            })
            .catch(error => console.error(error))
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect;