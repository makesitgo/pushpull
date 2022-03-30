exports = async ({ username }) => {
    const coll = context.services.get('mongodb-atlas').db('auth').collection('login');
    
    const user = await coll.findOne({ username });
    if (user) {
      return user._id.toString();
    }
    
    const { insertedId } = await coll.insertOne({ username });
    return insertedId.toString();
  };
