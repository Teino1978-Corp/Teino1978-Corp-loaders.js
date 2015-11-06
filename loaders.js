loaders: [{
    test: /\.js$/,
    loaders: ['babel-loader'],
    //exclude: /node_modules/,  // don't exclude, include instead !
    include: [
      path.resolve(__dirname, 'src'), // .resolve() give a absolute path
      path.resolve(__dirname, 'node_modules', 'moduleName') // include that if the module is written in ES6 (to babelize it too)
      // you need if you have this error for instance:
      // Module parse failed: ...\index.js Line 1: Unexpected reserved word
      // You may need an appropriate loader to handle this file type.
      // | import React from 'react';
    ]
}]