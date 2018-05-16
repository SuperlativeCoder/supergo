<script>
export default {
    methods: {
        onShowNotify() {
            this.$notify({ message: '这是一个消息' })
        },
        onShowSuccessNotify() {
            this.$notify({ message: '这是一个消息', type: 'success', iconable: true })
        },
        onShowInfoNotify() {
            this.$notify({ message: '这是一个消息', type: 'info', iconable: true })
        },
        onShowWarningNotify() {
            this.$notify({ message: '这是一个消息', type: 'warning', iconable: true })
        },
        onShowErrorNotify() {
            this.$notify({ message: '这是一个消息', type: 'error', iconable: true })
        }
    }
}
</script>
## 通知

> 悬浮出现在页面角落，显示全局的通知提醒消息
----------

## 使用范例
> 普通使用
:::demo
```html
<vs-Button type="primary" @click="onShowNotify">普通通知</vs-Button>
```
:::

> 模板使用
:::demo
```html
<vs-Button type="primary" @click="onShowSuccessNotify">成功</vs-Button>
<vs-Button type="primary" @click="onShowInfoNotify">普通</vs-Button>
<vs-Button type="primary" @click="onShowWarningNotify">警告</vs-Button>
<vs-Button type="primary" @click="onShowErrorNotify">错误</vs-Button>
```
:::