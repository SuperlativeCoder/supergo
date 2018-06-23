## 面包屑

> 当前页导航使用
----------

## 使用范例
> 基础用法
:::demo
```html
<vs-Breadcrumb>
    <vs-BreadcrumbItem>一级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem>二级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem>三级导航</vs-BreadcrumbItem>
</vs-Breadcrumb>
```
:::

> 含图标
:::demo
```html
<vs-Breadcrumb>
    <vs-BreadcrumbItem icon="home">一级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem>二级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem>三级导航</vs-BreadcrumbItem>
</vs-Breadcrumb>
```
:::

> 含链接
:::demo
```html
<vs-Breadcrumb>
    <vs-BreadcrumbItem icon="home" :to="{ path: '#' }">一级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem :to="{ path: '#' }">二级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem :to="{ path: '#' }">三级导航</vs-BreadcrumbItem>
</vs-Breadcrumb>
```
:::

> 自定义分割
:::demo
```html
<vs-Breadcrumb separator=">">
    <vs-BreadcrumbItem icon="home" :to="{ path: '#' }">一级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem :to="{ path: '#' }">二级导航</vs-BreadcrumbItem>
    <vs-BreadcrumbItem :to="{ path: '#' }">三级导航</vs-BreadcrumbItem>
</vs-Breadcrumb>
```
:::