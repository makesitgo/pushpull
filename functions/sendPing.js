exports = function() {
  return context
    .services
    .get('mongodb-atlas')
    .db('db')
    .collection('pings')
    .insertOne({
      time: new Date()
    });
};
