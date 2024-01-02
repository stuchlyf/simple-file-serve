import express from 'express';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT ?? 3000;
const PASSWORD = process.env.PASSWORD ?? 'changeme';
const app = express();
app.use(cookieParser())

app.use((req, res, next) => {
    console.log(req.cookies)
    if (req.cookies.__auth === PASSWORD) return next();

    return res.status(403).send();
})

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})