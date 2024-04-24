import { DataLayer } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { boldTextStyle } from '../utils/styles'

const pageData = {
  title: 'DataLayer',
  heading: 'Data Layer',
  description:
    'A data layer is a data structure on your site or app where you can store data and access it with tools like Tag Manager. You can include any data you want in your data layer. If you want to test it please create at least 2 goals in Piwik Dashboard.',
  methods: [
    {
      method: 'push',
      usage: 'DataLayer.push(dataLayerObject: Object)',
      desc: 'Adds an event to a data layer.',
    },
  ],
}

const DataLayerPage = () => {
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
            DataLayer.push({ data: 'data' })
          }}
        >
          DataLayer.push
        </button>
      </p>
    </div>
  )
}

export default DataLayerPage

export const Head: HeadFC = () => <title>DataLayer</title>
