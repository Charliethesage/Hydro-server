module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-chpfc5ndvk4goeo1bp10-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'naval_database'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '3YkeE0zvVBt8CWMbppYBE666flxC3Pvo'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        ca: env('DATABASE_CA'), // For self-signed certificates
      },
    },
    debug: false,
  },
});
 