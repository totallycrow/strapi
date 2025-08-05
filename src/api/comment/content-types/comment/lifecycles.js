// src/api/comment/content-types/comment/lifecycles.js
const crypto = require('crypto');

module.exports = {
  /**
   * This hook is triggered before a new comment is created.
   * It generates a secure, random hash for previewing.
   */
  beforeCreate(event) {
    const { data } = event.params;

    // Create a unique hash if one isn't provided.
    if (!data.moderationHash) {
      data.moderationHash = crypto.randomBytes(16).toString('hex');
    }
  },
};