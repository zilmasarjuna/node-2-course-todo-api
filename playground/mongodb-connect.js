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

    // db.collection('Todos').insertOne({
    //     text: 'Somethin to do',
    //     complete: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'Bekasi'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todom', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    client.close();
});