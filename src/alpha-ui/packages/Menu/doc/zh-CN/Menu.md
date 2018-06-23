## 菜单

> 用于导航使用
----------

## 基础用法
:::demo
```html
<vs-Row style="min-height: 400px;">
  <vs-Col :span="6">
    <vs-Menu>
      <vs-SubMenu>
        <template slot="title">
          <vs-Icon type="ios-paper"></vs-Icon>
          <span>导航一</span>
        </template>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组一</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组二</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
      </vs-SubMenu>
      <vs-SubMenu>
        <template slot="title">
          <vs-Icon type="android-bulb"></vs-Icon>
          <span>导航二</span>
        </template>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组一</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组二</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
      </vs-SubMenu>
      <vs-SubMenu disabled>
        <template slot="title">
          <vs-Icon type="stats-bars"></vs-Icon>
          <span>导航三</span>
        </template>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组一</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
        <vs-MenuGroup>
          <template slot="title">
            <span>分组二</span>
          </template>
          <vs-MenuItem>选项一</vs-MenuItem>
          <vs-MenuItem>选项二</vs-MenuItem>
          <vs-MenuItem>选项三</vs-MenuItem>
        </vs-MenuGroup>
      </vs-SubMenu>
      <vs-MenuItem>
        <vs-Icon type="ios-filing"></vs-Icon>
        普通菜单一
      </vs-MenuItem>
      <vs-MenuItem disabled>
        <vs-Icon type="ios-gear"></vs-Icon>
        普通菜单二
      </vs-MenuItem>
    </vs-Menu>
  </vs-Col>
</vs-Row>
```
:::