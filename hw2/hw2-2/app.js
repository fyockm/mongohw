var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var data = db.collection('data');
    var query = {};
    var options = { 'sort' : [['State', 1],['Temperature',-1]] };

    var cursor = data.find({},{},options);
    var state;

    cursor.each(function(err, doc) {
        if(err) throw err;
        if(!doc) {
            return db.close();
        }

        if (doc['State'] != state) {

	        state = doc['State'];

            query['_id'] = doc['_id'];
            doc['month_high'] = 1;

            data.update(query, doc, function(err, updated) {
                if(err) throw err;
                return;
            });
        }
    });
});
