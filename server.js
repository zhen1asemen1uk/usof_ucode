const express = require(`express`);
const app = express();

const config = require(`./config`);
const { port, host, CLIENT_URL } = config;

const cors = require(`cors`);
const cookieParser = require(`cookie-parser`);
const fileUpload = require(`express-fileupload`);


app.use(fileUpload({}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({
   credentials:true,
   origin: CLIENT_URL
}));
app.use(cookieParser());
app.use(express.static(`public`));


app.use(require(`./routers`));

app.use((req, res) => {
   res.status(404).send(`Unknown Request`)
})


app.listen(port, () => { console.log(`Server started...\n On ==> ${host}${port}`) });