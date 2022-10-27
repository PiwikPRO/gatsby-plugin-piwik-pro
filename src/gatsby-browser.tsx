import PiwikPro, { PageViews } from '@piwikpro/react-piwik-pro'

const onClientEntry = (
  _: any,
  pluginOptions: {
    pluginEnabled: boolean
    containerId: string
    containerUrl: string
  }
) => {
  pluginOptions.pluginEnabled &&
    PiwikPro.initialize(pluginOptions.containerId, pluginOptions.containerUrl)
}

const onRouteUpdate = (
  { location, prevLocation }: any,
  pluginOptions: { pluginEnabled: boolean }
) => {
  pluginOptions.pluginEnabled && PageViews.trackPageView(location)
}

export { onClientEntry, onRouteUpdate }
