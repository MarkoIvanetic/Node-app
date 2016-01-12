module.exports = function(app)
{
	app.use(function(req, res, next){
		res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
		next();
	});
	app.get('/',function(req,res){
		res.render('index')
	});
	app.get('/about',function(req,res){
		res.render('about');
	});     
	app.get('/shop',function(req,res){
		res.render('shop');
	});     
	app.get('/*',function(req,res){
		res.send(req.url);
	});
}