import Vue from 'vue'
import NotifyVue from './Notify.vue'

const instances: any[] = []
let seed = 1

const Notify = (options: any) => {
  const identify = seed++

  options = options || {}

  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }

  // close
  options.onClose = (id: string, userOnClose: any) => {
    for (let i = 0, len = instances.length; i < len; i++) {
      if (id === instances[i].id) {
        if (typeof userOnClose === 'function') {
          userOnClose(instances[i])
        }
        instances.splice(i, 1)
        break
      }
    }
  }
  // close all
  options.onCloseAll = () => {
    for (let i = instances.length - 1; i >= 0; i--) {
      instances[i].close()
    }
  }

  options.id = 'message_' + identify
  const instance = new NotifyVue({ data: options })

  instance.$mount().visible = true
  instance.$mount().$el.style.zIndex = '' + (7777 + identify) // 与弹出层初始值匹配
  document.body.appendChild(instance.$mount().$el)

  instances.push(instance)
  return instance.$mount()
}

export default Notify
