var express    =    require('express');
var exphbs  = require('express-handlebars');	
var app        =    express();

app.engine('handlebars', exphbs({defaultLayout: 'about'}));
app.set('view engine', 'handlebars');

require('./router/router')(app);
app.set('views',__dirname + '/views/layouts');


var server = app.listen(3000,function(){
console.log("Express is running on port 3000");
});