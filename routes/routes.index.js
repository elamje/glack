module.exports = function (app) {
  app.use('/api/', require('./routes.unauth'));
  app.use('/api/new-chat/:email', GitController.newChat(req)) //does this work? not sure how req will get passed here
};
