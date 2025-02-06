import PiwikPRO, { Miscellaneous } from '@piwikpro/tracking-base-library'
import { VERSION } from './version'

export const onClientEntry = (
  _: unknown,
  pluginOptions: {
    pluginEnabled: boolean
    containerId: string
    containerUrl: string
    nonceString: string | undefined
    dataLayerName: string | undefined
  }
) => {
  if (!pluginOptions.pluginEnabled) return

  Miscellaneous.setTrackingSourceProvider('gatsby', VERSION)

  PiwikPRO.initialize(pluginOptions.containerId, pluginOptions.containerUrl, {
    nonce: pluginOptions.nonceString,
    dataLayerName: pluginOptions.dataLayerName
  })
}
