const {MongoClient}  = require('mongodb')

const uri = "mongodb://127.0.0.1:27017";

const main = async() =>{
    const client = await MongoClient.connect(uri)
     
    try {
         const db = await client.db('mongodb_test_user')
         const collection = await db.collection('Users');

        const data = await collection.insertOne({name:'gaurav kumar',age:31})
       console.log(data)

    } catch (error) {
        console.log(error)
    } finally{
       await client.close()
    }

     
}  
main()

