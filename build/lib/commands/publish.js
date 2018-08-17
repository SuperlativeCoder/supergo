module.exports = (api, options) => {
    api.registerCommand('publish', {
      description: 'publish',
      usage: 'supergo-service publish [options]',
      options: {
        '--docs': `publish docs gh-pages`,
      }
    }, args => {
        const command = args._[0]
        if (args.docs) {
            publishDocs()
        }
    })
}

function publishDocs() {
    var ghpages = require('gh-pages')
    ghpages.publish('dist/docs', {
        branch: 'gh-pages',
        repo: 'https://github.com/superbiger/supergo.git'
    }, function(err) {
        console.log('Hello Docs')
    })
}