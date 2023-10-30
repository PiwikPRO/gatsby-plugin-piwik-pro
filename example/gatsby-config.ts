import type { GatsbyConfig } from 'gatsby'
import * as dotenv from 'dotenv'

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Piwik PRO Gatsby Demo`
  },

  graphqlTypegen: true,
  plugins: [
    {
      resolve: '@piwikpro/gatsby-plugin-piwik-pro',
      options: {
        containerUrl: process.env.GATSBY_CONTAINER_URL,
        containerId: process.env.GATSBY_CONTAINER_ID,
        nonceString: process.env.GATSBY_NONCE_STRING,
        pluginEnabled: true
      }
    }
  ]
}

export default config
