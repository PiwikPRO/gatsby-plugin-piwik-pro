import * as React from 'react'
import { GoalConversions } from 'gatsby-piwik-pro'
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
  title: 'GoalConversions',
  heading: 'Goal Conversions',
  description:
    'Goals let you define important actions registered in your application and track conversions when the conditions for the action are fulfilled.',
  methods: [
    {
      method: 'trackGoal',
      usage:
        'GoalConversions.trackGoal(goalId: number | string, conversionValue: number, dimensions?: Object)',
      desc: 'Tracks manual goal conversion.'
    }
  ]
}

const GoalConversionsPage = () => {
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
              GoalConversions.trackGoal(2, 40)
            }}
          >
            GoalConversions.trackGoal
          </button>
        </p>
      </div>
      <Link to='/'>Back to main page</Link>
    </main>
  )
}

export default GoalConversionsPage

export const Head: HeadFC = () => <title>GoalConversions</title>
