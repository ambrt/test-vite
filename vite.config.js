import {defineConfig} from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'

const handleHotUpdatePlugin = () => {
  return {
    name: 'handle-update',
    //transform(ctx) {console.log(ctx)},
    handleHotUpdate({server}) {
      const list = [];
      const {moduleGraph} = server;
      moduleGraph.urlToModuleMap.forEach((file) => {
        //console.log(file);
        if (file) {
          if (file['importedModules']) {
            const mods = file['importedModules'];
            //console.log(mods);
            mods.forEach((node) => {
              if (node['transformResult'] !== null) {
                if (node['transformResult']['code'].includes('import.meta.hot')) {
                  if (node['transformResult']['code'].includes('svelte.css')) {
                    if (node.id.includes('svelte&type=style')) {
                      list.push(node);
                    }
                  }
                }
              }
              //if (node.transformResult.code.include('svelte.css')) {
              //console.log(list.length)
              //}
            });
            //console.log(import.meta.hot);
            //return list // ModuleNode -> transformResult -> code -> svelte.css
            console.log(file)
          }
        }
      })
      return list
    }
  }
  //server.ws.send({
  //type: 'custom',
  //event: 'special-update',
  //data: {}
  //})
  //return []
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: [
      'src/**/*.css'
    ]
  },
  clear: false,
  plugins: [svelte(), handleHotUpdatePlugin()]
})
