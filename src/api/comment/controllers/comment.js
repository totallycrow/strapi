// src/api/comment/controllers/comment.js
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
  /**
   * Custom controller to securely fetch a single comment for preview.
   * It requires the comment ID and the matching moderationHash.
   */
  async preview(ctx) {
    const { id } = ctx.params;
    const { hash } = ctx.query;

    if (!hash) {
      return ctx.forbidden('No hash provided'); // 403 Forbidden
    }

    // Find the comment only if the ID and hash match
    const entity = await strapi.db.query('api::comment.comment').findOne({
      where: { id, moderationHash: hash },
    });

    if (entity) {
      // Use Strapi's built-in sanitizers and transformers
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } else {
      return ctx.notFound('Invalid preview request'); // 404 Not Found
    }
  },
}));