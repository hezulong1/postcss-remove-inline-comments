import type { PluginCreator } from 'postcss'

const creator: PluginCreator<never> = () => ({
  postcssPlugin: 'postcss-remove-inline',
  Comment: (c) => {
    c.raws.inline && c.remove()
  },
})
creator.postcss = true

export default creator
