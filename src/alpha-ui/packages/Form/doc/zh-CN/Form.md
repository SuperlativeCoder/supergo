## 表单

> 具有数据收集, 提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
> 弱化表单概念，不在表单这一次判断提交
----------

## 使用范例

> 基础用法
:::demo
```html
<vs-Form>
  <vs-FormItem label="用户名" required>
    <input type="text"/>
  </vs-FormItem>
  <vs-FormItem label="密码" required>
    <input type="text"/>
  </vs-FormItem>
</vs-Form>
```
:::