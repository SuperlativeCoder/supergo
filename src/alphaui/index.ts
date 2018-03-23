import Vue from "vue";

const components:Array<String> = [
  
]

const install = function(vue:Vue) {
  components.map(component => {
    Vue.component((component as any).name, component)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

module.exports = {
  
}

module.exports.default = module.exports