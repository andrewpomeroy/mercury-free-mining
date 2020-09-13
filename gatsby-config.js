module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description:
      'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: 'images',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'srcimages',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Sharp Sans'],
          urls: ['/fonts/fontface.css'],
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-source`,
            options: {
              name: `images`,
              htmlSources: [{ tagName: `float-image`, attributes: [`image`] }], // post-video is a component referenced later by gatsby-remark-custom-image-component
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: `gatsby-remark-component-images`,
            options: {
              // plugin options
              components: [
                // source attributes can be defined in the array as strings or objects
                // string represenation maps to the source attribute and the target attribute defaults to the source attribute prefixed by the sharpMethod
                // so below becomes [{source: `image`, target: `fluidimage`}]
                // { tagName: `post-video`, attributes: [`image`] },
                {
                  tagName: 'float-image',
                  attributes: [`image`],
                },
                // object representation can be used to apply/override options or define the target attribute
                // object and string representation can be mixed to suit requirement
                // { tagName: `gallery-media`, attributes: [{ source: `src`, target: `fluidimg`, options: { tracedSVG: { color: "rgb(248, 255, 93)" },`widescreen`] }
              ],
              sharpMethod: 'fluid',
              // fluid's arguments
              quality: 50,
              maxWidth: 1200,
              // withWebp: true
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
