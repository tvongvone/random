import express from "express"
import { profiles } from "./routes/profile.js";
import { MONGO_URI } from "./config/keys.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI).then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.log(err))

// We can add a {} which provides options as a second argument for mongoose.connect and set useNewUrlParser: true
// and useUnifiedTopology: true if we are working with an older version of node. They are both deprecated with the
// newer versions of node


app.use('/api/profile', profiles)

app.get('/test', (_, res) => {
    res.send(`This works properly`)
}) // The underscore is to signify that the default argument is being passed but not being utilized

const port = 5000;

const callback = () => console.log(`Server is running on port ${5000}`);

app.listen(port,callback);
