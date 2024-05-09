import { CustomDimensions } from '@piwikpro/gatsby-plugin-piwik-pro'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { boldTextStyle } from '../utils/styles'

const pageData = {
  title: 'CustomDimensions',
  heading: 'Custom Dimensions',
  description:
    'A custom dimension is an additional dimension that you can create to collect and analyze data. A custom dimension can be a user’s email, visitor’s age, blog category, blog author and the like.',
  methods: [
    {
      method: 'setCustomDimensionValue',
      usage:
        'CustomDimensions.setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string)',
      desc: 'Sets a custom dimension value to be used later.',
    },
    {
      method: 'deleteCustomDimension',
      usage:
        'CustomDimensions.deleteCustomDimension(customDimensionId: string)',
      desc: 'Removes a custom dimension with the specified ID.',
    },
    {
      method: 'getCustomDimensionValue',
      usage:
        'CustomDimensions.getCustomDimensionValue(customDimensionId: string | number)',
      desc: 'Returns the value of a custom dimension with the specified ID.',
    },
  ],
}

const CustomDimensionsPage = () => {
  const [customDimValue, setCustomDimValue] = React.useState<string>('')

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
            CustomDimensions.setCustomDimensionValue(12, 'valueFromButton')
          }}
        >
          CustomDimensions.setCustomDimensionValue
        </button>
        <button
          onClick={() => {
            const callAsyncMethods = async () => {
              const cDimValue = await CustomDimensions.getCustomDimensionValue(
                12
              )
              setCustomDimValue(cDimValue ?? '')
            }

            callAsyncMethods()
          }}
        >
          CustomDimensions.getCustomDimensionValue
        </button>
        <button
          onClick={() => {
            CustomDimensions.deleteCustomDimension('12')
          }}
        >
          CustomDimensions.deleteCustomDimension
        </button>
      </p>
      <p>
        <code>CustomDimensions.getCustomDimensionValue()</code> -
        {customDimValue}
      </p>
    </div>
  )
}

export default CustomDimensionsPage

export const Head: HeadFC = () => <title>CustomDimensions</title>
