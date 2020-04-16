
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const insertDocuments = require('./intern');
const findDocuments  =require('./findInterns'); 
const updateDocuments = require('./updateInterns');

//connection URL
const url = 'mongodb://localhost:27017';

//Database name
const dbName = 'genwagy';

//Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true} );

//Use the connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('connected successfully to server');

    const db = client.db(dbName);
    

    insertDocuments(db, function(){
        console.log('Database created by genwagy');
        findDocuments(db, function(){
            updateDocuments(db, function(){
                client.close();
              
               });
            });
        });
    
    });

// MongoClient.connect("mongodb://localhost:27017/genwagy",
// {useNewUrlParser: true, useUnifiedTopology:true}, (err, db)=>{

// if(err)throw err;
// console.log("Database created by genwagy");
// db.close();
// });