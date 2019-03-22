exports.pages = function (env, folder = '') {
  const rootPagesFolderName = 'pages'
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const fs = require('fs')
  const path = require('path')
  console.log( path.resolve(__dirname, `views/${rootPagesFolderName}/${folder}`))
  const viewsFolder = path.resolve(__dirname, `views/${rootPagesFolderName}/${folder}`)

  var pages = []

  fs.readdirSync(viewsFolder).forEach(view => {
    if (view.split('.')[1] === undefined)
      return false;

    const viewName = view.split('.')[0];
    const fileName = folder === '' ? `${viewName}.html` : `${folder}/${viewName}.html`;
    const options = {
      filename: fileName,
      template: path.resolve(__dirname, `views/${rootPagesFolderName}/${view}`),
      inject: true
    };

    if (env === 'development') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  })

  return pages;

}