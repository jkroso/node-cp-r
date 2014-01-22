
/**
 * Hydro configuration
 *
 * @param {Hydro} hydro
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'cp-r',
    formatter: require('hydro-dot'),
    plugins: [
      require('hydro-clean-dir'),
      require('hydro-bdd')
    ],
    cleanDir: {
      paths: [__dirname + '/../tmp']
    }
  })
}
