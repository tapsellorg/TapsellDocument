const TerserPlugin = require('terser-webpack-plugin');
const mode = process.env.NODE_ENV || 'production';
const isDevMode = mode === 'development';

module.exports = {
  mode,
  watch: isDevMode,
  entry: {
    'assets/bundle': './src/js/bundle.js',
    ...(!isDevMode ? { 'admin/admin': './admin/admin.js' } : {}),
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { includePaths: ['node_modules/'] } },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/' } }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { loader: 'file-loader', options: { outputPath: 'images/' } },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: false },
              pngquant: { quality: '65-90', speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: !isDevMode,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: { comments: false },
        },
        extractComments: false,
      }),
    ],
  },
};
