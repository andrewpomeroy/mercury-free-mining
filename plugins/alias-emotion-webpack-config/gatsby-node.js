const path = require('path');

// exports.onPreInit = () => console.log("LOADED GATSBY-STARTER-PLUGIN")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@emotion/core': path.resolve(__dirname, "node_modules/@emotion/core"),
      }
    },
  })
}
