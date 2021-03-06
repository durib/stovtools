var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var app = express();

/*
Get list of typeName and typeID for a list of typeIDs
*/
app.get('/getNames', function (req, res) {
	console.log(req.query.typeIDs);
	
	var db = new sqlite3.Database('db.sqlite');
		
	db.serialize(function() {
	
		var query = "SELECT typeID, typeName FROM invTypes WHERE typeID in ("+req.query.typeIDs+")";

		db.all(query, function(err, rows) {
			console.log(JSON.stringify(rows));
			res.end(JSON.stringify(rows));
		});
	});
	db.close();
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

