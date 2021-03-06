var path =require ('path') ;

process.noDeprecation =true ;

module.exports ={
	context: path.resolve (__dirname, '..'),
	entry: require ('./entry'),
	output: require ('./output-' + process.env.NODE_ENV),
	performance: require ('./performance-' + process.env.NODE_ENV),
	resolveLoader: require ('./resolveLoader'),
	module: require ('./module'),
	plugins: require ('./plugins-' + process.env.NODE_ENV),
	devtool: false
} ;
