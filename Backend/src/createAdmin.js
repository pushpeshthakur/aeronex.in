const bcrypt  = require('bcryptjs');
const adminModel = require('./models/admin.model');
const connectDB = require('../src/db/db')


async function createAdmin() {
    try{
        connectDB();

        const password = "admin@plus1";

        const hashedPassword =  await bcrypt.hash(password, 10);

        await adminModel.create({
            email: "admin@aeronex.com",
            password: hashedPassword,
        });

        console.log("Admin created sucessfully")

    } catch (error) {
        console.error("Admin creation failed:", error)
    }
}

module.exports = createAdmin;