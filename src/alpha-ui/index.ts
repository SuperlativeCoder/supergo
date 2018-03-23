import Vue, { PluginObject, PluginFunction } from 'vue';
import Header from '@/alpha-ui/packages/Header'

const components: any[] = [
  Header,
]

class Alphaui implements PluginObject<any> {
  public install: PluginFunction<any> = (vue) => {
    components.map(component => {
      vue.component('v-' + component.name, component)
    })
  }
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  new Alphaui().install((window as any).Vue)
}

export default new Alphaui()
