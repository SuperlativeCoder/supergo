## 警告

> 用于页面中展示重要的提示信息
----------

## 使用范例
> 基本用法
:::demo
```html
<vs-Alert type="success" title="成功提示的文案" iconable></vs-Alert>
<vs-Alert type="info" title="普通提示的文案" iconable></vs-Alert>
<vs-Alert type="warning" title="警告提示的文案" iconable></vs-Alert>
<vs-Alert type="error" title="错误提示的文案" iconable></vs-Alert>
```
:::

> 含描述
:::demo
```html
<vs-Alert type="success" 
    title="成功提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    iconable></vs-Alert>
<vs-Alert type="info" title="普通提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    iconable></vs-Alert>
<vs-Alert type="warning" title="警告提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    iconable></vs-Alert>
<vs-Alert type="error" title="错误提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    iconable></vs-Alert>
```
:::

> 含开关
:::demo
```html
<vs-Alert type="success" title="成功提示的文案" 
    iconable closable></vs-Alert>
<vs-Alert type="info" title="普通提示的文案" 
    close-text="瞅这里"
    iconable closable></vs-Alert>
<vs-Alert type="warning" title="警告提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    iconable closable></vs-Alert>
<vs-Alert type="error" title="错误提示的文案" 
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    close-text="瞅这里"
    iconable closable></vs-Alert>
```
:::