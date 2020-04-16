const assert = require('assert')

const insertDocuments = function(db, callback ){
 // Get the documents collection

 const collection = db.collection('myMovies');
//insert some Documents
collection.insertMany([
{movie: "The Banker", year: "2020", rating: 8},
{movie: "Bad Boys", year: "2020", rating: 7},
{movie: "The Hunt", year: "2020", rating: 7},
{movie: "Bloodshot", year: "2020", rating: 7.5},
{movie: "First Cow", year: "2020", rating: 6.5}, ], function(err, result){
assert.equal(null, err);
assert.equal(5, result.result.n)
assert.equal(5, result.ops.length)
console.log('documents inserted');
console.log(result);
callback(result);
  });
};


module.exports = insertDocuments;

// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb://localhost:27017/", 
// {useNewUrlParser:true, useUnifiedTopology:true}, (err, db)=>{
//     if(err) throw err;

//     var dba = db.db("genwagy");
//     dba.createCollection("interns", (err, res)=>{
//         if(err) throw err;
//         console.log("interns collection created");
//         db.close();
//     })
// });
