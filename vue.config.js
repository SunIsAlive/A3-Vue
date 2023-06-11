const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true
  },
  pages: {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
    },
    about: {
        entry: 'src/main.js',
        template: 'public/about.html',
        filename: 'about.html',
    },
    contact: {
        entry: 'src/main.js',
        template: 'public/contact.html',
        filename: 'contact.html',
    },
    product: {
      entry: 'src/main.js',
      template: 'public/product.html',
      filename: 'product.html',
    },
  }
})