import * as React from 'react'
import { eCommerce } from '@piwikpro/gatsby-plugin-piwik-pro'
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
  title: 'eCommerce',
  heading: 'eCommerce',
  description: 'Allow api calls to interact with visitor data.',
  methods: [
    {
      method: 'addEcommerceItem',
      usage:
        'eCommerce.addEcommerceItem(productSKU: string, productName: string, productCategory: string | string[], productPrice: number, productQuantity: number)',
      desc: 'Adds a product to a virtual shopping cart. If a product with the same SKU is in the cart, it will be removed first. Does not send any data to the Collecting & Processing Pipeline.'
    },
    {
      method: 'removeEcommerceItem',
      usage: 'eCommerce.removeEcommerceItem(productSKU: string)',
      desc: '  Removes a product with the provided SKU from a virtual shopping cart. If multiple units of that product are in the virtual cart, all of them will be removed. Does not send any data to the Collecting & Processing Pipeline.'
    },
    {
      method: 'clearEcommerceCart',
      usage: 'eCommerce.clearEcommerceCart()',
      desc: 'Removes all items from a virtual shopping cart. Does not send any data to the Collecting & Processing Pipeline.'
    },
    {
      method: 'getEcommerceItems',
      usage: 'eCommerce.getEcommerceItems()',
      desc: 'Returns a copy of items from a virtual shopping cart. Does not send any data to the Collecting & Processing Pipeline'
    },
    {
      method: 'trackEcommerceOrder',
      usage: 'eCommerce.trackEcommerceOrder()',
      desc: 'Tracks a successfully placed e-commerce order with items present in a virtual cart (registered using addEcommerceItem).'
    },
    {
      method: 'trackEcommerceCartUpdate',
      usage: 'eCommerce.trackEcommerceCartUpdate(cartAmount: number)',
      desc: 'Tracks items present in a virtual shopping cart (registered with addEcommerceItem)'
    },
    {
      method: 'setEcommerceView',
      usage:
        'eCommerce.setEcommerceView(productSKU: string, productName?: string, productCategory?: string[], productPrice?: string)',
      desc: 'Tracks product or category view. Must be followed by a page view.'
    }
  ]
}

const eCommercePage = () => {
  const [eCommerceItems, setECommerceInfo] = React.useState<any>('')

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
              eCommerce.addEcommerceItem('1', 'Button 1', 'Items', 14, 1)
            }}
          >
            eCommerce.addEcommerceItem #1
          </button>
          <button
            onClick={() => {
              eCommerce.addEcommerceItem('2', 'Button 2', 'Items', 12, 1)
            }}
          >
            eCommerce.addEcommerceItem #2
          </button>
          <button
            onClick={() => {
              eCommerce.removeEcommerceItem('1')
            }}
          >
            eCommerce.removeEcommerceItem #1
          </button>
          <button
            onClick={() => {
              eCommerce.removeEcommerceItem('2')
            }}
          >
            eCommerce.removeEcommerceItem #2
          </button>
          <button
            onClick={() => {
              eCommerce.trackEcommerceOrder('id', 50)
            }}
          >
            eCommerce.trackEcommerceOrder
          </button>
          <button
            onClick={() => {
              eCommerce.trackEcommerceCartUpdate(2)
            }}
          >
            eCommerce.trackEcommerceCartUpdate
          </button>
          <button
            onClick={() => {
              eCommerce.setEcommerceView('1')
            }}
          >
            eCommerce.setEcommerceView
          </button>
          <button
            onClick={() => {
              eCommerce.clearEcommerceCart()
            }}
          >
            eCommerce.clearEcommerceCart
          </button>{' '}
          <button
            onClick={() => {
              const callAsyncMethods = async () => {
                const ecItem = await eCommerce.getEcommerceItems()
                setECommerceInfo(ecItem)
              }

              callAsyncMethods()
            }}
          >
            eCommerce.getEcommerceItems
          </button>
        </p>
        <p>
          <code>eCommerce.getEcommerceItems()</code> -{' '}
          {JSON.stringify(eCommerceItems)}
        </p>
      </div>
      <Link to='/'>Back to main page</Link>
    </main>
  )
}

export default eCommercePage

export const Head: HeadFC = () => <title>eCommerce</title>
