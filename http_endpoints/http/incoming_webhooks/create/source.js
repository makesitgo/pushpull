exports = function(payload) {
    return context.services
      .get('mongodb-atlas')
      .db('db')
      .collection('webhooks')
      .insertOne(payload.body);
};