import * as React from 'react'
import { DownloadAndOutlink } from '@piwikpro/gatsby-plugin-piwik-pro'
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
  title: 'DownloadAndOutlink',
  heading: 'Download and outlink Service',
  description:
    'Manually tracks outlink or download event with provided values.',
  methods: [
    {
      method: 'trackLink',
      usage:
        'DownloadAndOutlink.trackLink(url: string, linkType: string, customData?: object, callback?: (params: any) => void)',
      desc: 'Manually tracks outlink or download event with provided values.'
    },
    {
      method: 'enableLinkTracking',
      usage: 'DownloadAndOutlink.enableLinkTracking(enable: boolean)',
      desc: 'Enables or disables automatic link tracking. If enabled, left, right and middle clicks on links will be treated as opening a link. Opening a links to an external site (different domain) creates an outlink event. Opening a link to a downloadable file creates a download event.'
    },
    {
      method: 'setLinkClasses',
      usage: 'DownloadAndOutlink.setLinkClasses(classes: string[])',
      desc: 'Sets a list of class names that indicate whether a link is an outlink and not download.'
    },
    {
      method: 'setDownloadClasses',
      usage: 'DownloadAndOutlink.setDownloadClasses(classes: string[])',
      desc: 'Sets a list of class names that indicate whether a list is a download and not an outlink.'
    },
    {
      method: 'setDownloadExtensions',
      usage: 'DownloadAndOutlink.setDownloadExtensions(extensions: string[])',
      desc: 'Overwrites the list of file extensions indicating that a link is a download.'
    },
    {
      method: 'addDownloadExtensions',
      usage: 'DownloadAndOutlink.addDownloadExtensions(extensions: string[])',
      desc: 'Adds new extensions to the download extensions list.'
    },
    {
      method: 'removeDownloadExtensions',
      usage:
        'DownloadAndOutlink.removeDownloadExtensions(extensions: string[])',
      desc: 'Removes extensions from the download extensions list.'
    },
    {
      method: 'setLinkTrackingTimer',
      usage: 'DownloadAndOutlink.setLinkTrackingTimer(time: number)',
      desc: 'When a visitor produces an events and closes the page immediately afterwards, e.g. when opening a link, the request might get cancelled. To avoid loosing the last event this way, JavaScript Tracking Client will lock the page for a fraction of a second (if wait time hasn’t passed), giving the request time to reach the Collecting & Processing Pipeline.'
    },
    {
      method: 'getLinkTrackingTimer',
      usage: 'DownloadAndOutlink.getLinkTrackingTimer()',
      desc: 'Returns lock/wait time after a request set by setLinkTrackingTimer.'
    },
    {
      method: 'setIgnoreClasses',
      usage: 'DownloadAndOutlink.setIgnoreClasses(classes: string[])',
      desc: 'Set a list of class names that indicate a link should not be tracked.'
    }
  ]
}

const DownloadAndOutlinkPage = () => {
  const [linkTrackingTimer, setLinkTrackingTimer] = React.useState<string>('')

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
          browser and track results on the console. Example below show the
          sample use of methods on the button click using onClick prop.
        </p>
        <p>
          <button
            onClick={() => {
              DownloadAndOutlink.trackLink('http://localhost:3000', 'link')
            }}
          >
            DownloadAndOutlink.trackLink
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.enableLinkTracking(true)
            }}
          >
            DownloadAndOutlink.enableLinkTracking
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.setLinkClasses(['this-is-an-outlink'])
            }}
          >
            DownloadAndOutlink.setLinkClasses
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.setDownloadClasses(['this-is-a-download'])
            }}
          >
            DownloadAndOutlink.setDownloadClasses
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.addDownloadExtensions(['rar'])
            }}
          >
            DownloadAndOutlink.addDownloadExtensions - add RAR tracking
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.removeDownloadExtensions(['rar'])
            }}
          >
            DownloadAndOutlink.removeDownloadExtensions - remove RAR tracking
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.setIgnoreClasses(['do-not-track'])
            }}
          >
            DownloadAndOutlink.setIgnoreClasses
          </button>
          <button
            onClick={() => {
              DownloadAndOutlink.setLinkTrackingTimer(20)
            }}
          >
            DownloadAndOutlink.setLinkTrackingTimer
          </button>
          <button
            onClick={() => {
              const callAsyncMethods = async () => {
                const lTrackingTimer =
                  await DownloadAndOutlink.getLinkTrackingTimer()
                setLinkTrackingTimer(lTrackingTimer)
              }

              callAsyncMethods()
            }}
          >
            CustomDimensions.getCustomDimensionValue
          </button>
        </p>
        <h2>Example download</h2>
        <div>
          <a href={`example.zip`} download>
            Download ZIP
          </a>{' '}
          - tracked download
          <br />
          <a href={`example.pdf`} download>
            Download PDF
          </a>{' '}
          - outlink
          <br />
          <a href={`example.rar`} download>
            Download RAR
          </a>{' '}
          - download tracked disabled by default, you can turn on/off by button
          <br />
          <a className='do-not-track' href={`example.xlsx`} download>
            Download XLXS
          </a>{' '}
          - download turned off by default using className
        </div>
        <p>
          <code>DownloadAndOutlink.getLinkTrackingTimer()</code> -{' '}
          {linkTrackingTimer}
        </p>
      </div>
      <Link to='/'>Back to main page</Link>
    </main>
  )
}

export default DownloadAndOutlinkPage

export const Head: HeadFC = () => <title>Home Page</title>
