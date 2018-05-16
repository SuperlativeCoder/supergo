<script>
export default {
    methods: {
        onShowMessage() {
            this.$message({ message: '这是一个消息' })
        },
        onShowSuccessMessage() {
            this.$message({ message: '这是一个消息', type: 'success', iconable: true })
        },
        onShowInfoMessage() {
            this.$message({ message: '这是一个消息', type: 'info', iconable: true })
        },
        onShowWarningMessage() {
            this.$message({ message: '这是一个消息', type: 'warning', iconable: true })
        },
        onShowErrorMessage() {
            this.$message({ message: '这是一个消息', type: 'error', iconable: true })
        }
    }
}
</script>
## 消息提示

> 常用于主动操作后的反馈提示
----------

## 使用范例
> 普通使用
:::demo
```html
<vs-Button type="primary" @click="onShowMessage">消息提示</vs-Button>
```
:::

> 模板使用
:::demo
```html
<vs-Button type="primary" @click="onShowSuccessMessage">成功</vs-Button>
<vs-Button type="primary" @click="onShowInfoMessage">普通</vs-Button>
<vs-Button type="primary" @click="onShowWarningMessage">警告</vs-Button>
<vs-Button type="primary" @click="onShowErrorMessage">错误</vs-Button>
```
:::