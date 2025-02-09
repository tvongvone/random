import express from "express"

const app = express();

app.use(express.json());

app.get('/test', (_, res) => {
    res.send(`This works properly`)
}) // The underscore is to signify that the default argument is being passed but not being utilized

const port = 5000;

const callback = () => console.log(`Server is running on port ${5000}`);

app.listen(port,callback);
