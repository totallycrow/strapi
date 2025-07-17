'use strict';

/**
 * comic-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comic-post.comic-post');
