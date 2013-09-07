var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = { 'Wind Direction' : { $gt : 180, $lt : 360 } };
    var projection = { 'State' : 1, '_id' : 0 };
    var options = { 'sort' : [['Temperature', 1]] };

    db.collection('data').findOne(query, {}, options, function(err, doc) {
        if(err) throw err;

        console.dir(doc);

        db.close();
    });
});
