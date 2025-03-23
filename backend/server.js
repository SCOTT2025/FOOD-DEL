import express from 'express';
import cors from 'cors';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API working fine');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// mongodb+srv://swiftbite:302323@cluster0.txnfp.mongodb.net/?
