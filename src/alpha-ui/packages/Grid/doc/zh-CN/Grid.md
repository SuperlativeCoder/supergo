<style scoped>
    .vs-row-flex{
        background-image: linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);    
        Color: white;
        height: 40px;
        margin-top: 3px;
        line-height: 40px;
    }

    .vs-row-odd {
        background: rgba(26,188,156, .7);
        text-align: center;
    }

    .vs-row-even {
        background: rgba(26,188,156, .5);
        text-align: center;
    }
</style>
## 栅格容器

> 栅格化系统支持 Flex 布局, Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度
----------

## 使用范例
> 基础用法
:::demo
```html
<vs-Row type="flex">
    <vs-Col :span="12" class="vs-row-odd">Col-12</vs-Col>
    <vs-Col :span="12" class="vs-row-even">Col-12</vs-Col>
</vs-Row>
<vs-Row type="flex">
    <vs-Col :span="8" class="vs-row-even">Col-8</vs-Col>
    <vs-Col :span="8" class="vs-row-odd">Col-8</vs-Col>
    <vs-Col :span="8" class="vs-row-even">Col-8</vs-Col>
</vs-Row>
<vs-Row type="flex">
    <vs-Col :span="6" class="vs-row-odd">Col-6</vs-Col>
    <vs-Col :span="6" class="vs-row-even">Col-6</vs-Col>
    <vs-Col :span="6" class="vs-row-odd">Col-6</vs-Col>
    <vs-Col :span="6" class="vs-row-even">Col-6</vs-Col>
</vs-Row>
```
:::

> 栅格排序
:::demo
```html
<vs-Row type="flex">
    <vs-Col :span="6" :order="4" class="vs-row-odd">1 | order-4</vs-Col>
    <vs-Col :span="6" :order="3" class="vs-row-even">2 | order-3</vs-Col>
    <vs-Col :span="6" :order="2" class="vs-row-odd">3 | order-2</vs-Col>
    <vs-Col :span="6" :order="1" class="vs-row-even">4 | order-1</vs-Col>
</vs-Row>
```
:::

> 左右偏移
:::demo
```html
<vs-Row type="flex">
    <vs-Col :span="8" class="vs-row-odd">Col-8</vs-Col>
    <vs-Col :span="8" :offset="8" class="vs-row-odd">Col-8 | offset-8</vs-Col>
</vs-Row>
<vs-Row type="flex">
    <vs-Col :span="6" :offset="8" class="vs-row-odd">Col-6 | offset-8</vs-Col>
    <vs-Col :span="6" :offset="4" class="vs-row-odd">Col-6 | offset-4</vs-Col>
</vs-Row>
<vs-Row type="flex">
    <vs-Col :span="12" :offset="8" class="vs-row-odd">Col-12 | offset-8</vs-Col>
</vs-Row>
```
:::

> 子元素向左排列
:::demo
```html
<vs-Row type="flex" justify="start">
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
</vs-Row>
```
:::

> 子元素向右排列
:::demo
```html
<vs-Row type="flex" justify="end">
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
</vs-Row>
```
:::

> 子元素居中排列
:::demo
```html
<vs-Row type="flex" justify="center">
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
</vs-Row>
```
:::

> 子元素等宽排列
:::demo
```html
<vs-Row type="flex" justify="space-between">
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
</vs-Row>
```
:::

> 子元素分散排列
:::demo
```html
<vs-Row type="flex" justify="space-around">
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-odd">Col-4</vs-Col>
    <vs-Col :span="4" class="vs-row-even">Col-4</vs-Col>
</vs-Row>
```
:::