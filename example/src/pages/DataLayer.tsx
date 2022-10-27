import * as React from 'react'
import { DataLayer } from 'gatsby-piwik-pro'
import { HeadFC, Link } from 'gatsby'
import profile from '../images/profile.png'

const pageStyles = {
  color: '#232129',
  padding: 96
}
const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '2.5rem',
  fontWeight: '800',
  lineHeight: '1.2'
}
const imageStyle = {
  borderRadius: 9999,
  height: 144,
  width: 144
}
const boldTextStyle = {
  fontWeight: '800'
}

const pageData = {
  title: 'DataLayer',
  heading: 'Data Layer',
  description:
    'A data layer is a data structure on your site or app where you can store data and access it with tools like Tag Manager. You can include any data you want in your data layer. If you want to test it please create at least 2 goals in Piwik Dashboard.',
  methods: [
    {
      method: 'push',
      usage: 'DataLayer.push(dataLayerObject: Object)',
      desc: 'Adds an event to a data layer.'
    }
  ]
}

const DataLayerPage = () => {
  return (
    <main style={pageStyles}>
      <div style={headerStyle}>
        <img src={profile} style={imageStyle} />
        <p>PiwikPRO Gatsby Examples</p>
      </div>
      <div>
        <h1>{pageData.title}</h1>
        <p>{pageData.description}</p>
        <h1>Import</h1>
        <code>{`import { ContentTracking } from '@piwikpro/gatsby-piwik-pro';`}</code>
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
          browser and track results on the console. Example below show the
          sample use of methods on the button click using onClick prop.
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
      <Link to='/'>Back to main page</Link>
    </main>
  )
}

export default DataLayerPage

export const Head: HeadFC = () => <title>DataLayer</title>
