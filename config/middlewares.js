// ./config/middlewares.js
module.exports = [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // allow images served by Strapi itself, inline/data, and your R2 domain
          'img-src': ["'self'", 'data:', 'blob:', 'https://tgtfhub.com'],
        },
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
