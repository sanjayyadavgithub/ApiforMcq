const mongoose = require('mongoose');

function startDb() {
  mongoose.connect('mongodb://localhost:27017/QuizMcq', {
    useNewUrlParser: true,
    keepAlive: 1
  })
  .then(() => console.log('Mongodb successully connected'));

  return mongoose.connection
    .on('error', console.error)
    .on('disconnected', startDb);
}

module.exports = {
  startDb,
}
 