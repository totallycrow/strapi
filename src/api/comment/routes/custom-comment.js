// src/api/comment/routes/custom-comment.js
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/comments/preview/:id',
      handler: 'comment.preview',
      config: {
        auth: false, // Make this route publicly accessible
      },
    },
  ],
};