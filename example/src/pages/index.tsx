import type { HeadFC } from 'gatsby'
import { Link } from 'gatsby'
import * as React from 'react'
import { headerStyle } from '../utils/styles'

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}
const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 24,
  verticalAlign: '5%',
}
const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
const links = [
  {
    url: 'ContentTracking',
    text: 'ContentTracking',
    description:
      'Content Tracking lets you track what content is visible on your site and how users interact with it.',
  },
  {
    url: 'CustomDimensions',
    text: 'CustomDimensions',
    description:
      'Custom Dimension is an additional dimension that you can create to collect and analyze data. A custom dimension can be a user’s email, visitor’s age, blog category, blog author and the like.',
  },
  {
    url: 'CustomEvent',
    text: 'CustomEvent',
    description:
      'Custom Events lets you track custom events not defined in rest of methods.',
  },
  {
    url: 'DataLayer',
    text: 'DataLayer',
    description:
      'Data layer is a data structure on your site or app where you can store data and access it with tools like Tag Manager. You can include any data you want in your data layer.',
  },
  {
    url: 'DownloadAndOutlink',
    text: 'DownloadAndOutlink',
    description:
      'Manually tracks outlink or download event with provided values.',
  },
  {
    url: 'eCommerce',
    text: 'eCommerce',
    description:
      'Ecommerce tracking allows you to use JavaScript code to collect data for events like adding a product to the cart, updating the order value, completing an order, and the like. To make the tracking work, you’ll need to code ecommerce elements that you want to track in Tag Manager.',
  },
  {
    url: 'GoalConversions',
    text: 'GoalConversions',
    description:
      'Goals let you define important actions registered in your application and track conversions when the conditions for the action are fulfilled.',
  },
  {
    url: 'PageViews',
    text: 'PageViews',
    description:
      'Page views are tracked automatically but method can be invoked manually with specified parameters.',
  },
  {
    url: 'SiteSearch',
    text: 'SiteSearch',
    description:
      'Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back.',
  },
  {
    url: 'UserManagement',
    text: 'UserManagement',
    description: 'Allow api calls to interact with user data.',
  },
]

const IndexPage = () => {
  return (
    <div style={headerStyle}>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={listItemStyles}>
            <span>
              <Link
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </Link>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
