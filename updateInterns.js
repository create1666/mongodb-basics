const assert =  require('assert');

const updateDocuments = function(db, callback){
    //Get the document collection
    const collection = db.collection('myMovies');

    //update the document collection
    collection.updateMany({movie: "The Banker"}, {$set: {movie: "Miracle in cell No.7", year: "2020", rating: 10}}, function(err, doc){
        assert.equal(null, err);
        console.log('Movie updated');
        console.log(doc);
        callback(doc);
    });

};

module.exports = updateDocuments;