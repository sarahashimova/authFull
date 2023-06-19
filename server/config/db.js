const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb+srv://sarash:sara12345@cluster0.ebarplg.mongodb.net/authFull");
            console.log('CONNECTED!');
            
        } catch (err) {
            console.log('Mongodb connection error!!');
            console.log(err);
        }
    }
}

module.exports = {
    db
}