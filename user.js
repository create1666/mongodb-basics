const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/", 
{useNewUrlParser:true, useUnifiedTopology:true}, (err, db)=>{
    if(err) throw err;

    var dba = db.db("genwagy");
    dba.createCollection("interns", (err, res)=>{
        if(err) throw err;
        console.log("interns collection created");
        db.close();
    })
});
