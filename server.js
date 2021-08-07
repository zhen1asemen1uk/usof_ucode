const express = require(`express`);
const app = express();

const config = require(`./config`);

const cors = require(`cors`);
const cookieParser = require(`cookie-parser`);
const fileUpload = require(`express-fileupload`);

const port = config.port || 3000;



app.use(fileUpload({}));
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(`public`));


app.use(require(`./routers`));

app.use((req, res) => {
   res.status(404).send(`Unknown Request`)
})


app.listen(port, () => { console.log(`Server started...\n http://localhost:${port}`) });