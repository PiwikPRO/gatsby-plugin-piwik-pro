import { SiteSearch } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import {
  boldTextStyle
} from '../utils/styles'

const pageData = {
  title: 'SiteSearch',
  heading: 'Site Search Service',
  description:
    'Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back.',
  methods: [
    {
      method: 'trackSiteSearch',
      usage:
        'SiteSearch.trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object)',
      desc: 'Tracks search requests on a website.',
    },
  ],
}

const SiteSearchPage = () => {
  return (
    <div>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
      <h1>Import</h1>
      <code>{`import { ContentTracking } from '@piwikpro/gatsby-plugin-piwik-pro';`}</code>
      <h1>Methods</h1>
      {pageData.methods.map((method) => (
        <div key={method.method}>
          <p style={boldTextStyle}>{method.method}</p>
          <p>{method.desc}</p>
          <code>{method.usage}</code>
        </div>
      ))}
      <h1>Sample usage</h1>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console. Example below show the sample
        use of methods on the button click using onClick prop.
      </p>
      <p>
        <button
          onClick={() => {
            SiteSearch.trackSiteSearch('keyword', 'button', 4)
          }}
        >
          SiteSearch.trackSiteSearch
        </button>
      </p>
    </div>
  )
}

export default SiteSearchPage

export const Head: HeadFC = () => <title>SiteSearch</title>
