jest.mock('@piwikpro/tracking-base-library', () => ({
  __esModule: true,
  default: { initialize: jest.fn(), getInitScript: jest.fn() },
  Miscellaneous: { setTrackingSourceProvider: jest.fn() },
}))

import { onClientEntry } from '../gatsby-browser'
import PiwikProCore, { Miscellaneous } from '@piwikpro/tracking-base-library'
import { VERSION } from '../version'

const OPTIONS = {
  pluginEnabled: true,
  containerId: 'container-id',
  containerUrl: 'https://example.piwik.pro',
  nonceString: undefined,
  dataLayerName: undefined,
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('onClientEntry()', () => {
  it('sets the source provider before delegating to core', () => {
    onClientEntry(undefined, OPTIONS)

    expect(Miscellaneous.setTrackingSourceProvider).toHaveBeenCalledWith('gatsby', VERSION)
    expect(
      (Miscellaneous.setTrackingSourceProvider as jest.Mock).mock.invocationCallOrder[0]
    ).toBeLessThan((PiwikProCore.initialize as jest.Mock).mock.invocationCallOrder[0])
  })

  it('forwards the container settings to core initialize', () => {
    onClientEntry(undefined, {
      ...OPTIONS,
      nonceString: 'abc',
      dataLayerName: 'myDataLayer',
    })

    expect(PiwikProCore.initialize).toHaveBeenCalledWith('container-id', 'https://example.piwik.pro', {
      nonce: 'abc',
      dataLayerName: 'myDataLayer',
    })
  })

  it('does nothing when the plugin is disabled', () => {
    onClientEntry(undefined, { ...OPTIONS, pluginEnabled: false })

    expect(Miscellaneous.setTrackingSourceProvider).not.toHaveBeenCalled()
    expect(PiwikProCore.initialize).not.toHaveBeenCalled()
  })
})
