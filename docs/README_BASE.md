# Piwik PRO Library for Gatsby

Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in Gatsby applications.

## Installation

To use this package in your project, run the following command.

### npm

```
npm install @piwikpro/gatsby-plugin-piwik-pro
```

### Yarn

```
yarn add @piwikpro/gatsby-plugin-piwik-pro
```

### Basic setup

In your Gatsby Project, edit main configuration file called `gatsby-config.js` (`gatsby-config.ts` if you are using TypeScript).

In the arguments, pass your container URL and your container id as parameters (marked `containerUrl` and `containerId` in the example below).

You can disable plugin setting parameter `pluginEnabled` as false.

If you want to use nonce, you need to pass it as parameter `nonceString`.

##### gatsby-config.js

```ts
plugins: [
  {
    resolve: '@piwikpro/gatsby-plugin-piwik-pro',
    options: {
      pluginEnabled: true,
      containerUrl: 'https://example.containers.piwik.pro/',
      containerId: 'dc0f2c80-79d8-456a-9c77-6d48d6f867dd',
      nonceString: '', // not required
      dataLayerName: 'myDataLayer', // custom Data Layer name, not required
    },
  },
]
```

### Track page views

To track all page view you need to create or edit `gatsby-browser.js` or `gatsby-browser.ts` file, and add `onRouteUpdate` function like on example below.

```ts
import { PageViews } from '@piwikpro/gatsby-plugin-piwik-pro'

const onRouteUpdate = () => {
  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() =>
        setTimeout(() => PageViews.trackPageView(), 0)
      )
    })
  } else {
    setTimeout(() => PageViews.trackPageView(), 32)
  }
}

export { onRouteUpdate }
```

## Example Usage

To use methods in your page you need to import them from the library like on example.

```ts
import { PageViews, DataLayer } from '@piwikpro/gatsby-plugin-piwik-pro'
```

You can use those methods in all hooks and props for ex. `useEffect` or `onClick`.

### useEffect

```ts
useEffect(() => {
  PageViews.trackPageView('optional title')
}, [])
```

### onClick

```ts
<button
  onClick={() => {
    CustomEvent.trackEvent('Post', pageData.title)
  }}
>
  CustomEvent.trackEvent button
</button>
```

test