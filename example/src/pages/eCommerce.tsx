import { eCommerce, type Product } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { useState } from 'react'
import { boldTextStyle } from '../utils/styles'

const pageData = {
  title: 'eCommerce',
  heading: 'eCommerce',
  description: 'Allow api calls to interact with visitor data.',
  methods: [
    {
      method: 'ecommerceAddToCart',
      usage: 'eCommerce.ecommerceAddToCart(products: Product[])',
      desc: 'An ecommerce add-to-cart tag lets you collect data about products added to the cart in your online store. ',
    },
    {
      method: 'ecommerceRemoveFromCart',
      usage: 'eCommerce.ecommerceRemoveFromCart(products: Product[])',
      desc: 'An ecommerce remove-from-cart tag lets you collect data about products removed from the cart in your online store. ',
    },
    {
      method: 'ecommerceCartUpdate',
      usage:
        'eCommerce.ecommerceCartUpdate(products: Product[], grandTotal: number)',
      desc: 'An ecommerce cart update tag lets you collect data about products added to the cart in your online store.',
    },
    {
      method: 'ecommerceOrder',
      usage:
        'eCommerce.ecommerceOrder(products: Product[], paymentInformation: PaymentInformation)',
      desc: 'An ecommerce order tag lets you collect data about orders in your online store. ',
    },
    {
      method: 'ecommerceProductDetailView',
      usage: 'eCommerce.ecommerceProductDetailView(products: Product[])',
      desc: 'An ecommerce product detail view tag lets you collect data about the views of the product detail page in your online store. ',
    },
  ],
}

const products: Product[] = [
  {
    sku: 'sku-1',
    name: 'Product 1',
    category: ['product-category'],
    brand: 'Brand 1',
    variant: 'Variant 1',
    price: 9.99,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-2',
    name: 'Product 2',
    category: ['product-category'],
    brand: 'Brand 2',
    variant: 'Variant 2',
    price: 19.98,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-3',
    name: 'Product 3',
    category: ['product-category'],
    brand: 'Brand 3',
    variant: 'Variant 3',
    price: 29.97,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-4',
    name: 'Product 4',
    category: ['product-category'],
    brand: 'Brand 4',
    variant: 'Variant 4',
    price: 39.96,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-5',
    name: 'Product 5',
    category: ['product-category'],
    brand: 'Brand 5',
    variant: 'Variant 5',
    price: 49.95,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-6',
    name: 'Product 6',
    category: ['product-category'],
    brand: 'Brand 6',
    variant: 'Variant 6',
    price: 59.94,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
]

const eCommercePage = () => {
  const [cart, setCart] = useState<Product[]>([])
  const [isOpenProductDetails, setIsOpenProductDetails] = useState(false)

  const handlelAddToCart = (product: Product) => {
    eCommerce.ecommerceAddToCart(
      [
        {
          ...product,
          quantity: 1,
        },
      ],
      { currencyCode: 'USD' }
    )

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const handleCheckout = () => {
    if (!cart.length) {
      alert('Please add some products to the cart first')
      return
    }

    const subTotal = cart.reduce((acc, product) => {
      if (product.price) {
        return acc + product.price
      }
      return acc
    }, 0)

    const tax = 10
    const shipping = 4
    const discount = 5

    const paymentInformation = {
      orderId: 'order-123',
      grandTotal: subTotal + tax + shipping - discount,
      subTotal,
      tax,
      shipping,
      discount,
    }

    eCommerce.ecommerceOrder(cart, paymentInformation, { currencyCode: 'USD' })
  }

  const removeProduct = (product: Product) => {
    const newCart = cart.filter((item) => item.sku !== product.sku)
    setCart(newCart)
    eCommerce.ecommerceRemoveFromCart(newCart, { currencyCode: 'USD' })
  }

  const increaseProductQuantity = (product: Product) => {
    const newCart = cart.map((item) => {
      if (item.sku === product.sku && item.quantity) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item
    })

    const subTotal = cart.reduce((acc, product) => {
      if (product.price) {
        return acc + product.price
      }
      return acc
    }, 0)

    const tax = 10
    const shipping = 4
    const discount = 5

    setCart(newCart)
    eCommerce.ecommerceCartUpdate(
      newCart,
      subTotal + tax + shipping - discount,
      { currencyCode: 'USD' }
    )
  }

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductDetailViewOpen = (product: Product) => {
    setSelectedProduct(product)
    setIsOpenProductDetails(true)
    eCommerce.ecommerceProductDetailView([product], { currencyCode: 'USD' })
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
        marginBottom: 20,
      }}
    >
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
      <div>
        <h3>Product list</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {products.map((product) => (
            <li key={product.sku} style={{ display: 'flex', gap: 10 }}>
              <span>{product.name}</span>
              <button onClick={() => handlelAddToCart(product)}>
                Add to cart
              </button>
              <button onClick={() => handleProductDetailViewOpen(product)}>
                View product detail
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Checkout</h3>
        <h4>Payment details</h4>
        {cart.map((product) => (
          <div key={product.sku} style={{ display: 'flex', gap: 10 }}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.quantity} X &nbsp;</span>
            <button onClick={() => increaseProductQuantity(product)}>
              add next
            </button>
            <button onClick={() => removeProduct(product)}>remove</button>
          </div>
        ))}
        {cart.length === 0 && <p>No products in the cart</p>}
      </div>
      <div>
        <h3>Place order</h3>
        <button onClick={handleCheckout}>Place order</button>
      </div>
      <div>
        <h3>Product detail view</h3>
        <button onClick={() => setIsOpenProductDetails(!isOpenProductDetails)}>
          {isOpenProductDetails ? 'Close' : 'Show'} product details
        </button>
        {isOpenProductDetails && (
          <div>
            <h5>Product details</h5>
            <p>
              {selectedProduct
                ? JSON.stringify(selectedProduct)
                : 'No product selected'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default eCommercePage

export const Head: HeadFC = () => <title>eCommerce</title>
