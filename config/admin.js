module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a58220be5ad0f5bc6e22765f9075b2c3'),
  },
});
