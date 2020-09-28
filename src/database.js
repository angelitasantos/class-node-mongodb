const mongoose = require('mongoose')

const { MONGODB_NOTE_MONGODB_HOST, MONGODB_NOTE_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_NOTE_MONGODB_HOST}/${MONGODB_NOTE_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error'));