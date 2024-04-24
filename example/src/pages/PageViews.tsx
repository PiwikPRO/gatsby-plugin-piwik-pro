import { PageViews } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { boldTextStyle } from '../utils/styles'

const pageData = {
  title: 'PageViews',
  heading: 'Send page views and virtual page views',
  description:
    'Page views are tracked automatically but method can be invoked manually with specified parameters.',
  methods: [
    {
      method: 'trackEvent',
      usage:
        'PageViews.trackEvent(category: string, action: string, name?: string | undefined, value?: number | undefined): void',
      desc: 'Tracks manual content impression event.',
    },
  ],
}

const PageViewsPage = () => {
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
            PageViews.trackPageView('optional title from button')
          }}
        >
          PageViews.trackPageView
        </button>
      </p>
    </div>
  )
}

export default PageViewsPage

export const Head: HeadFC = () => <title>PageViews</title>
