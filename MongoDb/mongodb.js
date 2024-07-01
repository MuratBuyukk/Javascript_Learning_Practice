
const { MongoClient, ObjectId, Collection } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'Node-Education';

const client = new MongoClient(url);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('users');

        // const myID = new ObjectId();
        // console.log(myID.id.length);
        // console.log(myID.getTimestamp());

        // await collection.insertOne({_id: myID, name: 'Murat Büyük', age: 25, updatedID: myID}).then(res => console.log(res.ops));


        // const documents = [
        // {name: 'Murat Büyük', age: 30},  
        // {name: 'Murat Büyük', age: 30},  
        // {name: 'Murat Büyük', age: 30},  
        // ];

        // const insertResult = await collection.insertOne({ name: 'Person1', age: 30 });

        // const insertResultMany = await collection.insertMany(documents); 
        // console.log('Documents added..', insertResultMany.insertedCount);
        // console.log('Documents added..', insertResultMany.insertedIds);

        // await collection.find({ name: 'Murat Büyük'}).toArray().then(datas => console.log(datas.length));
        // await collection.findOne({ name: 'Murat Büyük'}).then(data => console.log(data));
        // await collection.updateOne({ name: 'Person1'},{
        //     $set: {
        //         name: 'ali'
        //     }
        // }).then(data => console.log(data));
        // await collection.updateMany({ name: 'Murat Büyük'},{
        //     $set: {
        //         name: 'Murat_Buyuk'
        //     }
        // }).then(data => console.log(data));

        // await collection.deleteOne({
        //     name: 'ali'
        // }).then(result => console.log(result));

        // await collection.deleteMany({
        //     name: 'Murat_Buyuk',
        // }).then(result => console.log(result));

    } catch (error) {
        console.error('MongoDB connetion error:', error);
    } finally {
        await client.close();
        console.log('MongoDB connection close.');
    }
}

connectToMongoDB();
