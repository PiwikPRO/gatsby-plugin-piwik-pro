import PiwikPro from '@piwikpro/react-piwik-pro'

const onClientEntry = (
  _: unknown,
  pluginOptions: {
    pluginEnabled: boolean
    containerId: string
    containerUrl: string
    nonceString: string | undefined
  }
) => {
  pluginOptions.pluginEnabled &&
    PiwikPro.initialize(pluginOptions.containerId, pluginOptions.containerUrl, pluginOptions.nonceString)
}

export { onClientEntry }
