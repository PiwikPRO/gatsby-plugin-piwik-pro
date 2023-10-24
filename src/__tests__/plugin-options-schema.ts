import { testPluginOptionsSchema } from "gatsby-plugin-utils"
import { pluginOptionsSchema } from "../gatsby-node"

describe(`pluginOptionsSchema`, () => {
  it("should invalidate missing containerId", async () => {
    const options = {
      pluginEnabled: true,
      containerUrl: "container-url",
      containerId: undefined,
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(false)
    expect(errors).toEqual([`"containerId" is required`])
  })
  it("should invalidate missing containerUrl", async () => {
    const options = {
      pluginEnabled: true,
      containerUrl: undefined,
      containerId: "container-id",
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(false)
    expect(errors).toEqual([`"containerUrl" is required`])
  })
  it("should validate correct options with pluginEnabled default value", async () => {
    const options = {
      pluginEnabled: undefined,
      containerUrl: "container-url",
      containerId: "container-id",
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
  it("should validate correct options with pluginEnabled set to true", async () => {
    const options = {
      pluginEnabled: true,
      containerUrl: "container-url",
      containerId: "container-id",
      nonceString: "nonce-string",
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
  it("should validate correct options with pluginEnabled set to false", async () => {
    const options = {
      pluginEnabled: false,
      containerUrl: undefined,
      containerId: undefined,
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
})
