import * as GatsbyPiwikPro from '../index'

// Services are re-exported from @piwikpro/react-piwik-pro (which itself
// re-exports the tracking-base-library core).
const EXPECTED_SERVICES = [
  'PageViews',
  'CustomEvent',
  'ContentTracking',
  'CookieManagement',
  'CustomDimensions',
  'DownloadAndOutlink',
  'eCommerce',
  'GoalConversions',
  'SiteSearch',
  'UserManagement',
  'DataLayer',
  'ErrorTracking',
  'CrossDomainTracking',
  'ClientConfiguration',
  'Heartbeat',
  'Miscellaneous',
] as const

describe('public surface of @piwikpro/gatsby-plugin-piwik-pro', () => {
  it.each(EXPECTED_SERVICES)('re-exports the "%s" service', (name) => {
    expect(GatsbyPiwikPro[name]).toBeDefined()
  })

  it('default export exposes the initialize() entry point', () => {
    expect(typeof GatsbyPiwikPro.default.initialize).toBe('function')
  })
})
