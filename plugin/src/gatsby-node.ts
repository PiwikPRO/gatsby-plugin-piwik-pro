import type {PluginOptionsSchemaArgs} from "gatsby"

export const pluginOptionsSchema = ({Joi}: PluginOptionsSchemaArgs) =>
  Joi.object({
    pluginEnabled: Joi.boolean().default(true).description(`Enable or disable the plugin`),
    containerUrl: Joi.string().when(`pluginEnabled`, {
      is: true,
      then: Joi.required(),
      otherwise: Joi.optional(),
    }).description(`The URL of your Piwik PRO instance`),
    containerId: Joi.string().when(`pluginEnabled`, {
      is: true,
      then: Joi.required(),
      otherwise: Joi.optional(),
    }).description(`The ID of your Piwik PRO container`),
    nonceString: Joi.string().empty().description(`The nonce string to use for the script tag`),
    dataLayerName: Joi.string().empty().description(`Custom data layer name`),
  })
