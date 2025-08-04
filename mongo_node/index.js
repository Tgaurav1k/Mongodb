// //1. importing MongoDB tools
// const {MongoClient} = require("mongodb");  
// // MongoClient - tool from MongoDB library

// //2. address  of database
// const uri = "mongodb://127.0.0.1"


// //3. create a client (a way to talk to the database)
// const client =  new MongoClient(uri);

// //4. making a product to insert
// const data1 = {
//     name: 'Designer Handbag',
//     company: '64c23350e32f4a51b19b923a',
//     price: 3499,
//     colors: [ '#000000', '#cc6600', '#663300' ],
//     image: '/images/product-handbag.png',
//     category: '64c2342de32f4a51b19b9250',
//     isFeatured: false
// };

// //5. function to connect with database  => async
// const main = async () => {

//   // a) connect to database
//   await client.connect();

//   // b) shop as databse and select one collection like page 
//   const db  = client.db('shop');
//   const collection = db.collection("products");

//   // c) insert one product
//  await collection.insertOne(data1)

//  // d)  find all products >3491
//  const data = await collection.find({price:{$gt:3491}}).toArray();   // change the result into a list or  big array
//  console.log(data);  //e) show result
//  return "done";     // f) end result
// }

// main()  // 6. run the function
// .then(console.log())   // prints just done
// .catch((e)=>console.log(e))  // catch the error 
// .finally( ()=> client.close());  // close the connection 

// const {MongoClient} = require("mongodb"); // mongodb connect with tools

// const uri = "mongodb://127.0.0.1";  // database uri 

// const client = new MongoClient(uri); // create client to talk with mongodb

// const data1 = {
//     name: 'Designer Handbag',
//     company: '64c23350e32f4a51b19b923a',
//     price: 3499,
//     colors: [ '#000000', '#cc6600', '#663300' ],
//     image: '/images/product-handbag.png',
//     category: '64c2342de32f4a51b19b9250',
//     isFeatured: false
// };

// const main = async()=>{
//   await client.connect();
//   const db = client.db('shop')
//   const collection = db.collection('products');
//   await collection.insertOne(data1)
//   const data = await collection.find({price:{$gt:3491}}).toArray();  // list as output
//   console.log(data);
//   return "done"
// }

// main()
// .then(console.log())
// .catch(e=>console.log(e))
// .finally(()=>client.close());


// const {MongoClient} = require('mongodb')
// const uri = 'mongodb://127.0.0.1';

// const data1={
//    name: 'Designer Handbag',
//   company: '64c23350e32f4a51b19b923a',
//   price: 3499,
//   colors: ['#000000', '#cc6600', '#663300'],
//   image: '/images/product-handbag.png',
//   category: '64c2342de32f4a51b19b9250',
//   isFeatured: false
// }

// const main = async() =>{
//   const client = await MongoClient.connect(uri);
//   try {
//     const db = client.db('shop');
//     const collection = db.collection('products');
//     await collection.insertOne(data1);

//     const data = await collection.find({price:{$gt:3400}}).toArray();
//     console.log(data)
//     return 'done';

//   } catch (error) {
//     console.log(error)
//   } finally{
//     await client.close()
//   }
// }
// main()
// .then(console.log)
// .catch(console.error)


// const { MongoClient } = require('mongodb');
// const uri = 'mongodb://127.0.0.1:27017'; // Always include port for clarity

// const data1 = {
//   name: 'Designer Handbag',
//   company: '64c23350e32f4a51b19b923a',
//   price: 3499,
//   colors: ['#000000', '#cc6600', '#663300'],
//   image: '/images/product-handbag.png',
//   category: '64c2342de32f4a51b19b9250',
//   isFeatured: false
// };

// const main = async () => {
//   const client = await MongoClient.connect(uri);
//   try {
//     const db = client.db('shop');
//     const collection = db.collection('products');

//     // Optional: Insert data (skip this if already inserted)
//     // await collection.insertOne(data1);

//     // ✅ Delete the product by name
//     const deleteResult = await collection.deleteOne({ name: 'Designer Handbag' });
//     console.log('Deleted count:', deleteResult.deletedCount);

//     // Optional: Check remaining products
//     const data = await collection.find({}).toArray();
//     console.log(data);

//     return 'done';
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// };

// main()
//   .then(console.log)
//   .catch(console.error);

// const {MongoClient} = require('mongodb')

// const uri = 'mongodb://127.0.0.1'

// const data1={
// name: 'Designer Handbag',
//   company: '64c23350e32f4a51b19b923a',
//   price: 3499,
//   colors: ['#000000', '#cc6600', '#663300'],
//   image: '/images/product-handbag.png',
//   category: '64c2342de32f4a51b19b9250',
//   isFeatured: false
// };

// const main =async()=>{
//   const client = await MongoClient.connect(uri)

//   try {
//     const db = client.db('shop')
//     const collection = db.collection('products')

//    await collection.insertOne(data1);
//    const data = await collection.find({price:{$gt:3400}}).toArray();
//    console.log(data)
//    return 'done';

//   } catch (error) {
//     console.log(error);
//   } finally{
//     await client.close()
//   }
// }

// main()
// .then(console.log())
// .catch(console.error)


const {MongoClient} = require('mongodb')
const uri = "mongodb://127.0.0.1"

const data1 = {
   name: 'Designer Handbag',
  company: '64c23350e32f4a51b19b923a',
  price: 3499,
  colors: ['#000000', '#cc6600', '#663300'],
  image: '/images/product-handbag.png',
  category: '64c2342de32f4a51b19b9250',
  isFeatured: false
}

const main = async() =>{
  const client = await MongoClient.connect(uri)

  try {
    const db = await client.db('shop')
    const collection = db.collection('products')

    await collection.insertOne(data1)
    const data = await collection.find({price:{$gt:3400}}).toArray();
    console.log(data)
    return 'done'

  } catch (error) {
    console.log(error)
  } finally{
    await client.close()
  }   

}

main()
.then(console.log)
.catch(console.error)








// // const {MongoClient} = require('mongodb');
// // const uri = 'mongodb://127.0.0.1'

// const data1={
//    name: 'Designer Handbag',
//   company: '64c23350e32f4a51b19b923a',
//   price: 3499,
//   colors: ['#000000', '#cc6600', '#663300'],
//   image: '/images/product-handbag.png',
//   category: '64c2342de32f4a51b19b9250',
//   isFeatured: false
// };

//  const main = async()=>{
//   const client = await MongoClient(uri);

//   try {
//     const db = client.db('shop')
//     const collection = db.collection('products')
    
//     await collection.insertOne(data1);
//     const data = await collection.find({price:{$gt:3500}}).toArray();
//     console.log(data)
//     return 'done';

//   } catch (error) {
//     console.log(error)
//   } finally{
//     await client.close();
//   }
    
//  }
// main()
// .then(console.log)
// .catch(console.log(error))
