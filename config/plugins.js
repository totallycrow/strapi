// ./config/plugins.js   – Strapi v5  + Cloudflare R2 with custom domain
module.exports = ({ env }) => ({
  'users-permissions': {
    config: { jwtSecret: env('JWT_SECRET') },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        /* 1️⃣  the public host you want browsers to use               */
        baseUrl: env('R2_BASE_URL'),              // https://tgtfhub.com

        /* 2️⃣  everything the AWS SDK needs (must be inside s3Options) */
        s3Options: {
          endpoint:       env('R2_ENDPOINT'),     // https://ff43e8d9….r2.cloudflarestorage.com
          region:         'auto',
          forcePathStyle: true,                   // R2‑friendly
          credentials: {
            accessKeyId:     env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
        },

        /* 3️⃣  bucket name stays here                                   */
        params: { Bucket: env('R2_BUCKET_NAME') }, // content-bucket
      },

      /* remove this line if you want the thumbnail / medium sizes */
      breakpoints: { thumbnail: 256 },   // (or leave breakpoints out entirely)

    },
  },
  
});
