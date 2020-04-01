
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/genwagy",
{useNewUrlParser: true, useUnifiedTopology:true}, (err, db)=>{

if(err)throw err;
console.log("Database created by genwagy");
db.close();
});