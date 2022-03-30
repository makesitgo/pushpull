exports = function(){
  console.log(JSON.stringify(context.user));
  if (context.user.type === 'system') {
    return context.user.type
  }
  if (context.user.custom_data._id) {
    return context.user.custom_data.name
  }
  if (context.user.data.name) {
    return context.user.data.name
  }
  if (context.user.data.email) {
    return context.user.data.email
  }
  return 'unknown'
};