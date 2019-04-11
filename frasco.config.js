module.exports = {
  port: 5700,

  tasks: {
    browsersync: true,
    eslint: false,
    imagemin: true,
    sass: true,
    watch: true,
    webpack: true
  },

  assets: '.',

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

  eslintLoader: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  },

  imagemin: {
    src: 'assets/_images',
    dest: 'images',
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }]
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: ''
    },
    dest: '_site',
    // includes: 'src/_includes',
    // layouts: 'src/_layouts/',
    posts: 'src/docs'
  },

  js: {
    src: 'src/_js',
    dest: 'js',
    entry: ['bundle.js']
  },

  sass: {
    src: 'src/_sass',
    dest: 'css',
    outputStyle: 'compressed',
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  },

  webpack: {
    mode: 'development',
    module: {
      rules: []
    }
  }
};
