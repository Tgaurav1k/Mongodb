// const mongoose = require('mongoose');

// // const uri = 'mongodb://127.0.0.1/shop';
// const uri = 'mongodb+srv://gk24a3562:Gaurav1201@cluster0.vdxpbp2.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'

// // connect to MongoDb
// mongoose.connect(uri);

// // we need to create a schema 
// const productSchema = new mongoose.Schema({
//     name:String,
//     company:String,
//     price:Number,
//     colors:[String],
//     image:String,
//     category:String,
//     isFeatured:Boolean,
// });

// // we need to create an model
// const Product = mongoose.model('Product',productSchema);

//  // 2nd while inserting the data
//     const data1 = {
//     name: 'Designer Handbag',
//     company: '64c23350e32f4a51b19b923a',
//     price: 3099,
//     colors: [ '#000000', '#cc6600', '#663300' ],
//     image: '/images/product-handbag.png',
//     category: '64c2342de32f4a51b19b9250',
//     isFeatured: false
// };



// const main = async() =>{
//    try {
    
//     // const data = await Product.find({price:{$gt:3466}});
//     // console.log(data);
   
//     // 1. insert
//     // await Product.insertOne(data1);
//     // 2. find data
//     // const data = await Product.find({price:{$eq:3099}});
//     // console.log(data);

//     // 3. update data
// //    const updateQuery = await Product.findOneAndUpdate({name:'Designer Handbag',price:3099},
// //     {$set:{price:2499}})

//     // 4. delete data
//     await Product.findOneAndDelete({'name':'Designer Handbag', price:3099})
   
//     const data2 = await Product.find({price:{$eq:3099}})
//      console.log(data2)
//    } catch (error) {
//     console.log(error)
//    } finally{
//     mongoose.connection.close();
//    }
// }

// main();

const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1/shopkeeper';

// const uri ="'mongodb+srv://gk24a3562:Gaurav1201@cluster0.vdxpbp2.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'"

mongoose.connect(uri) 

const ProductSchema= new mongoose.Schema({
    name:String,
    company:String,
    price:Number,
    colors:[String],
    image:String,
    category:String,
    isFeatured:Boolean,
})

const Product = mongoose.model('Product',ProductSchema);

 const data1 = {
    name: 'Designer Handbag',
    company: '64c23350e32f4a51b19b923a',
    price: 3099,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-handbag.png',
    category: '64c2342de32f4a51b19b9250',
    isFeatured: false
 }

 const main = async() =>{
    try {

        // .insert 
        // await Product.insertOne(data1);
        // const data = await Product.find({price:{$eq:299}})
        // console.log(data)
        
        //update
        // await Product.updateOne(data1);
        const updateQuery = await Product.updateOne({name:'Designer Handbag',price:3099},
        {$set:{price:29999}})
        console.log(updateQuery)
        return 'done'
        
       //delete
    //    await Product.deleteOne({price:{$eq:29999}})

       //find
    //    const finded = await Product.find({price:299})
    //    console.log(finded)

    } catch (error) {
        console.log(error)
    } finally{
        await mongoose.connection.close();
    }
 }

 main()
//  .then(console.log('done'))
//  .catch(console.error)