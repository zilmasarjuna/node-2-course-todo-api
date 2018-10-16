const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj)

var user = {name: 'andrew', age: 25};
var {name} = user;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })
    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        
    })
    // client.close();
});