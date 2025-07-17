// ./config/plugins.js  – Strapi v5  +  Cloudflare R2  (working)
module.exports = ({ env }) => ({
  'users-permissions': {
    config: { jwtSecret: env('JWT_SECRET') },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        /* Where browsers should fetch the file from */
        baseUrl: env('R2_BASE_URL'),              // https://tgtfhub.com  (your Cloudflare custom domain)
        /* Everything the AWS SDK needs */
        s3Options: {
          endpoint:        env('R2_ENDPOINT'),    // https://ff43e8d9….cloudflarestorage.com
          region:          'auto',
          forcePathStyle:  true,
          accessKeyId:     env('R2_ACCESS_KEY_ID'),
          secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        },
        params: { Bucket: env('R2_BUCKET_NAME') },// content-bucket
      },
      breakpoints: {},  // remove this line if you *want* Strapi sizes
    },
  },

  

});
