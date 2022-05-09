const mongoose = require('mongoose')


const connectDB = async () => {

  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  mongoose.connection
  .on('error', (error) => {
    console.log(error)
  })
  .once('connected', () => {
    console.log('Database Connected');
  })
  
    // try {
    //     await mongoose.connect(process.env.MONGO_URI, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology:true
    //     });
    //       mongoose.connection.once('connected', ()=> {
    //         console.log(('Database is Connected'));
    //       })
    //     } catch (error) {
    //       console.error(`Error: ${error.message}`);
    //       process.exit();
    // }
}

module.exports = connectDB
