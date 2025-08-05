// src/policies/verify-recaptcha.js
'use strict';
const axios = require('axios');

module.exports = async (policyContext, config, { strapi }) => {
  const { captchaToken } = policyContext.request.body.data;
  const secretKey = process.env.RECAPTCHA_COMMENTS_SECRET_KEY;

  if (!captchaToken) {
    return policyContext.badRequest('Please provide a reCAPTCHA token.');
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null, // No body data needed in this format
      {
        params: {
          secret: secretKey,
          response: captchaToken,
        },
      }
    );

    const { success } = response.data;

    if (success) {
      // If successful, remove the token from the body so it's not saved
      delete policyContext.request.body.data.captchaToken;
      return true; // Allow the request to proceed
    } else {
      return policyContext.badRequest('reCAPTCHA verification failed.');
    }
  } catch (error) {
    strapi.log.error('reCAPTCHA verification error:', error);
    return policyContext.internalServerError('Error during reCAPTCHA verification.');
  }
};