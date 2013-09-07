var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;

    var scores = [];
    var students = db.collection('students');

    students.find().toArray(function(err, docs) {
        if(err) throw err;

        for (var i = 0; i < docs.length; i++) {

            scores = docs[i]['scores'];

            var lowest = null;
            for (var j = 0; j < scores.length; j++) {
                if (scores[j]['type'] == "homework" &&
                    (lowest==null ||
                    scores[j]['score'] < scores[lowest]['score'])) {
                    lowest = j;
                }
            }
            scores.splice(lowest, 1);

            console.dir(docs[i]);

            students.update({'_id':docs[i]['_id']}, docs[i], function(err, updated) {
                if(err) throw err;
                return;
            });
        }

        db.close();
    });
});
