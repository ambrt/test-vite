const fileRegex: RegExp = /\.(css)$/

function extCssPlugin() {
  const virtualFileId: string = '@ext-css-file'

  return {
    name: 'ext-css',
    resolveId(id) {
      if (id === virtualFileId) {
        return virtualFileId
      }
    },
    load(id) {
      if (id === virtualFileId) {
        return `export const msg = "ext css file`
      }
    }
  }
};

export default extCssPlugin
