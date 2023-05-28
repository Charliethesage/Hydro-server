    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'dpg-chpfc5ndvk4goeo1bp10-a.singapore-postgres.render.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'naval_database'),
          user: env('DATABASE_USERNAME', 'admin'),
          password: env('DATABASE_PASSWORD', '3YkeE0zvVBt8CWMbppYBE666flxC3Pvo'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });