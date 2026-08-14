require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const createAdmin = require('./src/createAdmin');


connectDB();
// createAdmin();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Aeronex Backend is running successfully on port 3000!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


