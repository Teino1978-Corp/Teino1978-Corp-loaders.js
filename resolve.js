resolve: {
  extensions: ['', '.js'],
  // the default is : ["", ".webpack.js", ".web.js", ".js"]
  // ''    : is needed when require('toto.js') (at least)
  // '.js' : is needed when require('./src') (to find index.js)
  
  alias: {
    'react-line': path.resolve('src', 'index.js') // replace require('react-line') per require('./src./index.js')
    'react-test': 'react' // 'react' instead of 'react-test'
    // require('react-test/toto.js') ==> require('react/toto.js')
  }
}

plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop'),
    ...
]