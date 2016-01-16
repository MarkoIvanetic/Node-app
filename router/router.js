var variables = require('./variables.js');

module.exports = function(app)
{
	app.use(function(req, res, next){
		res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
		next();
	});
	app.get('/',function(req,res){
		res.render('index',{layout: false})
	});
	app.get('/about',function(req,res){
		res.render('about',{
			layout: false,
			pageTestScript: '/qa/tests-about.js'
		});
	}); 
	app.get('/shop',function(req,res){
		res.render('shop',{layout: false});
	});
	app.get('/headers', function(req,res){
		res.set('Content-Type','text/plain');
		var s = '';
		for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
			res.send(s);
	});
	app.get('/article', function(req, res) {
		res.sendfile('./views/about.html');
	});
	app.use(function(req,res){
		res.status(404)
		.render('404',{layout:'template', title:'404-not found', numbers: variables.nums});
	});
}