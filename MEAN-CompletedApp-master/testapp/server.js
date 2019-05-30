var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require ('body-parser');
var mongodb = require('mongodb');

var router = express();
/* ng route */
router.use(express.static(path.resolve(__dirname, 'testapp/dist')));
router.use(bodyParser.json());

/* db */
var LOCALEVENTS_COLLECTION = 'localevents';
var dbURI = 'mongodb://localhost:27017/eventsapp';
var db;
mongodb.MongoClient.connect(dbURI, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // save database object for reuse
  db = database;
  console.log("Db connection ready");
});

/* start server */
var server = http.createServer(router);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("testapp server listening at", addr.address + ":" + addr.port);
});

/* api routes */
// error handler
function handleError(res, reason, message, code) {
  console.log("Error: " + reason);
  res.status(code || 500).json({"error": message});
}

router.get("/api/localevents", function(req, res) {
  db.collection(LOCALEVENTS_COLLECTION).find({}).toArray(function(err, docs){
    if (err) {
      handleError(res, err.message, "Failed to get events.");
    } else {
      res.status(200).json(docs);
    }   
  });
});







