module.exports = {
  port: 5700,

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // 'Google Chrome',
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ]
  },

  imagemin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }]
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: ''
    },
    posts: 'src/docs'
  },

  sass: {
    outputStyle: 'compressed',
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  }
};
