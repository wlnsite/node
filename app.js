var express = require('express');
var app = express();
app.use(express.static('assets'))
/*app.use(express.favicon('/assets/favicon.ico'));*/
app.set('views', './views');
app.set('view engine', 'jade');
var server = app.listen(process.env.WLN_LISTEN_PORT || 80, function () {
    console.log('App Server listening on port %s', server.address().port);
});
app.get('/', function (req, res) {
    res.render('index', { title: 'Wlniao', message: 'Hello World!' });
});
app.get('/test', function (req, res) {
    res.send('test page');
});