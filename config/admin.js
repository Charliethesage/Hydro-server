module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','P7XjuVrsLt+9ZZ3u3xJuCQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','NGA2bdZdFJEZtD6jGP/rzw=='),
  },
});
