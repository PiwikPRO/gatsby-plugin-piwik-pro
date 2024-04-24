import { UserManagement } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import {
  boldTextStyle
} from '../utils/styles'

const pageData = {
  title: 'UserManagement',
  heading: 'User Management',
  description: 'Allow api calls to interact with user data.',
  methods: [
    {
      method: 'getUserId',
      usage: 'UserManagement.getUserId()',
      desc: 'The function that will return user ID.',
    },
    {
      method: 'setUserId',
      usage: 'UserManagement.setUserId(userId: string)',
      desc: 'User ID is an additional parameter that allows you to aggregate data. When set up, you will be able to search through sessions by this parameter, filter reports through it or create Multi attribution reports using User ID.',
    },
    {
      method: 'resetUserId',
      usage: 'UserManagement.resetUserId()',
      desc: 'Clears previously set userID, e.g. when visitor logs out.',
    },
    {
      method: 'getVisitorId',
      usage: 'UserManagement.getVisitorId()',
      desc: 'Returns 16-character hex ID of the visitor.',
    },
    {
      method: 'getVisitorInfo',
      usage: 'UserManagement.getVisitorInfo()',
      desc: 'Returns 16-character hex ID of the visitor.',
    },
  ],
}

const UserManagementPage = () => {
  const [userId, setUserId] = React.useState<string>('')
  const [visitorId, setVisitorId] = React.useState<string>('')
  const [visitorInfo, setVisitorInfo] = React.useState<any>('')

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
            UserManagement.setUserId('UserIdButton')
          }}
        >
          UserManagement.setUserId
        </button>
        <button
          onClick={() => {
            const callAsyncMethods = async () => {
              const uId = await UserManagement.getUserId()
              setUserId(uId)
            }

            callAsyncMethods()
          }}
        >
          UserManagement.getUserId
        </button>
        <button
          onClick={() => {
            const callAsyncMethods = async () => {
              const vId = await UserManagement.getVisitorId()
              setVisitorId(vId)
            }

            callAsyncMethods()
          }}
        >
          UserManagement.getVisitorId
        </button>
        <button
          onClick={() => {
            const callAsyncMethods = async () => {
              const vInfo = await UserManagement.getVisitorInfo()
              setVisitorInfo(vInfo)
            }

            callAsyncMethods()
          }}
        >
          UserManagement.getVisitorInfo
        </button>
        <button
          onClick={() => {
            UserManagement.resetUserId()
          }}
        >
          UserManagement.resetUserId
        </button>
      </p>
      <p>
        <code>UserManagement.getUserId()</code> - {userId}
      </p>
      <p>
        <code>UserManagement.getVisitorId()</code> - {visitorId}
      </p>
      <p>
        <code>UserManagement.getVisitorInfo()</code> -{' '}
        {JSON.stringify(visitorInfo)}
      </p>
    </div>
  )
}

export default UserManagementPage

export const Head: HeadFC = () => <title>UserManagement</title>
