const config = {};

config.web = {
  hostname: process.env.HOSTNAME || '0.0.0.0',
  port: process.env.PORT || 42001
};

config.web.cors = {
  origin: '*'
};

config.tumblr = {
  auth: {
    consumer_key: process.env.TUMBLR_CONSUMER_KEY, // eslint-disable-line camelcase
    consumer_secret: process.env.TUMBLR_CONSUMER_SECRET, // eslint-disable-line camelcase
    token: process.env.TUMBLR_TOKEN,
    token_secret: process.env.TUMBLR_TOKEN_SECRET // eslint-disable-line camelcase
  },
  blogName: process.env.TUMBLR_BLOG_NAME
};

module.exports = config;
