import { ContentTracking } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { boldTextStyle } from '../utils/styles'

const pageData = {
  title: 'ContentTracking',
  heading: 'Content Tracking Service',
  description:
    'Content Tracking lets you track what content is visible on your site and how users interact with it.',
  methods: [
    {
      method: 'trackContentImpression',
      usage:
        'ContentTracking.trackContentImpression(contentName: string, contentPiece: string, contentTarget: string)',
      desc: 'Tracks manual content impression event.',
    },
    {
      method: 'trackContentInteraction',
      usage:
        'ContentTracking.trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string)',
      desc: 'Tracks manual content interaction event.',
    },
  ],
}

const ContentTrackingPage = () => {
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
            ContentTracking.trackContentImpression(
              'contentName',
              'contentPiece',
              'contentTarget'
            )
          }}
        >
          ContentTracking.trackEvent
        </button>
        <button
          onClick={() => {
            ContentTracking.trackContentInteraction(
              'contentInteraction',
              'contentName',
              'contentPiece',
              'contentTarget'
            )
          }}
        >
          ContentTracking.trackContentInteraction
        </button>
      </p>
    </div>
  )
}

export default ContentTrackingPage

export const Head: HeadFC = () => <title>ContentTracking</title>
