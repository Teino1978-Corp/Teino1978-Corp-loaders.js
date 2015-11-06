new webpack.optimize.UglifyJsPlugin({
  compressor: {
    pure_getters: true, // foo.bar or foo["bar"]) doesn't have any side effects.
    unsafe: true, // several transforms exp.toString() → "" + exp, Array(1, 2, 3) → [ 1, 2, 3 ], new Object/RegExp/Function/Error/Array (...) → we discard the new, .. 
    unsafe_comps: true, // unsafe comparaison <= to > etc.
    screw_ie8: true, // special identifier not between quote (as ie8 needs) 'class' => class
    warnings: false
  }
})