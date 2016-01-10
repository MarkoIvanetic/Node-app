var express    =    require('express');
var app        =    express();

require('./router/router')(app);
app.set('views',__dirname + '/views');
console.log(__dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000,function(){
console.log("Express is running on port 3000");
});