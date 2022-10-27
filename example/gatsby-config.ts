import type { GatsbyConfig } from 'gatsby'
import * as dotenv from 'dotenv'

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Piwik Gatsby Demo`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-piwik-pro',
      options: {
        containerUrl: process.env.GATSBY_CONTAINER_URL,
        containerId: process.env.GATSBY_CONTAINER_ID,
        pluginEnabled: true // true by default
      }
    }
  ]
}

export default config
