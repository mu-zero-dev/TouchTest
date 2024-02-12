var express = require('express');
var http = require('http');
var path = require('path');

const app = express();
app.use('/static', express.static(`${__dirname}/static`));
app.use(express.json());


const server = http.createServer(app);


app.get('/', (req, res) => {
    console.log("came in get")
    // let id = (app.locals.index++).toString(36);
    let id = (5000).toString(36);
    console.log("id is ...",id);
    res.redirect(`/${id}`);
});

app.get('/:roomId', (req, res) => {
    console.log("Came in app.get(/:roomId")
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

server.listen(8082, () => {
    console.log(`Started server on port ${server.address().port}`);
});