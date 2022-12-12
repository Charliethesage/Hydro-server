module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('QoQ7nfbmFrcAFlqkLzWBbg==,SELhoYfWShYVpm/XBb07yw==,HNBFipozbmVjU8WpjoA8OQ==,KIqSiF8hNl/L7wwidwSxEQ=='),
  },
});
