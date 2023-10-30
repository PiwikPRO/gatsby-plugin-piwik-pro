import {PageViews} from '@piwikpro/gatsby-plugin-piwik-pro'

const onRouteUpdate = () => {
  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(() => PageViews.trackPageView(), 0))
    })
  } else {
    setTimeout(() => PageViews.trackPageView(), 32)
  }
}

export {onRouteUpdate}
