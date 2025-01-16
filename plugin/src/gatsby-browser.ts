import PiwikPRO from '@piwikpro/react-piwik-pro'

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

  // HACK: react-piwik-pro uses both named and default exports (for compatibility reasons)
  // which is a problem when consuming the lib in commonjs https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
  // @ts-expect-error
  PiwikPRO.default.initialize(
    pluginOptions.containerId,
    pluginOptions.containerUrl,
    {
      nonce: pluginOptions.nonceString,
      dataLayerName: pluginOptions.dataLayerName
    }
  )
}
