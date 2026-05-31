const shouldUseSsl = (env, url) => {
  const sslMode = url?.searchParams.get('sslmode');

  if (sslMode === 'disable') {
    return false;
  }

  return env.bool(
    'DATABASE_SSL',
    ['require', 'prefer', 'verify-ca', 'verify-full', 'no-verify'].includes(sslMode)
  );
};

const parseDatabaseUrl = (databaseUrl, env) => {
  const url = new URL(databaseUrl);
  const ssl = shouldUseSsl(env, url)
    ? { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false) }
    : false;

  return {
    host: url.hostname,
    port: Number(url.port || 5432),
    database: decodeURIComponent(url.pathname.replace(/^\//, '')),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    ssl,
  };
};

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  return {
    connection: {
      client: 'postgres',
      connection: databaseUrl
        ? parseDatabaseUrl(databaseUrl, env)
        : {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi'),
            user: env('DATABASE_USER', 'strapi'),
            password: env('DATABASE_PASSWORD', ''),
            ssl: env.bool('DATABASE_SSL', false)
              ? { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false) }
              : false,
          },
      debug: env.bool('DATABASE_DEBUG', false),
      pool: { min: 0, max: 7 },
    },
  };
};
