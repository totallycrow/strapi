// src/api/comment/routes/comment.js
'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::comment.comment', {
  config: {
    create: {
      // 👇 Apply the policy to the 'create' action
      policies: ['global::verify-recaptcha'],
    },
  },
});