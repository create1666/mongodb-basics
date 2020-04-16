const assert = require('assert');

const findDocuments = function(db, callback){
    //Get the documents collection
    const collection = db.collection('myMovies');
    //Find some documents

    collection.findOne({movie: "The Banker", year: "2020", rating: 8}, function(err, doc){
        assert.equal(null, err);
        console.log('first document in the collection found');
        console.log(doc);
       
    });
   
      collection.find({rating: 7}).toArray(function(err, doc){
          assert.equal(null, err);
          console.log('All movies with a rating of 7 found');
          console.log(doc);
       
      });

    collection.find({}, {projection: {_id: 0, movie: 1}}).toArray(function(err, doc){
        assert.equal(null, err);
        console.log('All movie titles found');
        console.log(doc);
        callback(doc);
    })
};

module.exports = findDocuments;