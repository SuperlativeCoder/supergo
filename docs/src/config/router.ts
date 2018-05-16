import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../views/welcome.md'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Sider from '../components/Sider.vue'

import Icon from '../../../src/alpha-ui/packages/Icon/doc/zh-CN/Icon.md'
import Grid from '../../../src/alpha-ui/packages/Grid/doc/zh-CN/Grid.md'
import Button from '../../../src/alpha-ui/packages/Button/doc/zh-CN/Button.md'
import Card from '../../../src/alpha-ui/packages/Card/doc/zh-CN/Card.md'
import Tabs from '../../../src/alpha-ui/packages/Tabs/doc/zh-CN/Tabs.md'
import Image from '../../../src/alpha-ui/packages/Image/doc/zh-CN/Image.md'
import Pagination from '../../../src/alpha-ui/packages/Pagination/doc/zh-CN/Pagination.md'
import Form from '../../../src/alpha-ui/packages/Form/doc/zh-CN/Form.md'
import Input from '../../../src/alpha-ui/packages/Input/doc/zh-CN/Input.md'
import InputNumber from '../../../src/alpha-ui/packages/InputNumber/doc/zh-CN/InputNumber.md'
import Checkbox from '../../../src/alpha-ui/packages/Checkbox/doc/zh-CN/Checkbox.md'
import Radio from '../../../src/alpha-ui/packages/Radio/doc/zh-CN/Radio.md'
import Select from '../../../src/alpha-ui/packages/Select/doc/zh-CN/Select.md'
import Switch from '../../../src/alpha-ui/packages/Switch/doc/zh-CN/Switch.md'
import Datepicker from '../../../src/alpha-ui/packages/DatePicker/doc/zh-CN/DatePicker.md'
import Timepicker from '../../../src/alpha-ui/packages/TimePicker/doc/zh-CN/TimePicker.md'
import Rate from '../../../src/alpha-ui/packages/Rate/doc/zh-CN/Rate.md'
import Upload from '../../../src/alpha-ui/packages/Upload/doc/zh-CN/Upload.md'
import Import from '../../../src/alpha-ui/packages/Import/doc/zh-CN/Import.md'
import Breadcrumb from '../../../src/alpha-ui/packages/Breadcrumb/doc/zh-CN/Breadcrumb.md'
import Menu from '../../../src/alpha-ui/packages/Menu/doc/zh-CN/Menu.md'
import Alert from '../../../src/alpha-ui/packages/Alert/doc/zh-CN/Alert.md'
import Message from '../../../src/alpha-ui/packages/Message/doc/zh-CN/Message.md'
import Notify from '../../../src/alpha-ui/packages/Notify/doc/zh-CN/Notify.md'
import Popover from '../../../src/alpha-ui/packages/Popover/doc/zh-CN/Popover.md'
import Avatar from '../../../src/alpha-ui/packages/Avatar/doc/zh-CN/Avatar.md'
import Table from '../../../src/alpha-ui/packages/Table/doc/zh-CN/Table.md'
import Step from '../../../src/alpha-ui/packages/Step/doc/zh-CN/Step.md'
import Tag from '../../../src/alpha-ui/packages/Tag/doc/zh-CN/Tag.md'
import Loading from '../../../src/alpha-ui/packages/Loading/doc/zh-CN/Loading.md'

Vue.use(Router)

const Index = {
  template: '<transition name="fade"><router-view></router-view></transition>',
}

const router = new Router({
  routes: [
    { path: '*', redirect: '/zh-CN' },
    { path: '/', redirect: '/zh-CN' },
    {
      path: '/zh-CN',
      components: { default: Index, menu: Sider, header: Header, footer: Footer },
      children: [
        { path: '/', name: '欢迎', component: Welcome, meta: 'welcome' },
        { path: '/icon', name: 'Icon 图标', component: Icon, meta: 'basic' },
        { path: '/grid', name: 'Grid 栅格容器', component: Grid, meta: 'basic' },
        { path: '/button', name: 'Button 按钮', component: Button, meta: 'basic' },
        { path: '/tag', name: 'Tag 标签', component: Tag, meta: 'show' },
        { path: '/card', name: 'Card 卡片', component: Card, meta: 'show' },
        { path: '/image', name: 'Image 图片', component: Image, meta: 'show' },
        { path: '/table', name: 'Table 表格', component: Table, meta: 'show' },
        { path: '/form', name: 'Form 表单', component: Form, meta: 'form' },
        { path: '/input', name: 'Input 输入框', component: Input, meta: 'form' },
        { path: '/inputnumber', name: 'InputNumber 计数器', component: InputNumber, meta: 'form' },
        { path: '/checkbox', name: 'Checkbox 复选框', component: Checkbox, meta: 'form' },
        { path: '/radio', name: 'Radio 单选框', component: Radio, meta: 'form' },
        { path: '/select', name: 'Select 选择器', component: Select, meta: 'form' },
        { path: '/switch', name: 'Switch 开关', component: Switch, meta: 'form' },
        { path: '/datepicker', name: 'Datepicker 日期选择器', component: Datepicker, meta: 'form' },
        { path: '/timepicker', name: 'Timepicker 时间选择器', component: Timepicker, meta: 'form' },
        { path: '/rate', name: 'Rate 评分', component: Rate, meta: 'form' },
        { path: '/upload', name: 'Upload 上传', component: Upload, meta: 'form' },
        { path: '/import', name: 'Import 导入', component: Import, meta: 'form' },
        { path: '/menu', name: 'Menu 菜单', component: Menu, meta: 'navigation' },
        { path: '/tabs', name: 'Tabs 面板', component: Tabs, meta: 'navigation' },
        { path: '/step', name: 'Step 步骤', component: Step, meta: 'navigation' },
        { path: '/pagination', name: 'Pagination 分页', component: Pagination, meta: 'navigation' },
        { path: '/breadcrumb', name: 'Breadcrumb 面包屑', component: Breadcrumb, meta: 'navigation' },
        { path: '/alert', name: 'Alert 警告', component: Alert, meta: 'notice' },
        { path: '/notify', name: 'Notify 通知', component: Notify, meta: 'notice' },
        { path: '/message', name: 'Message 消息提示', component: Message, meta: 'notice' },
        { path: '/popover', name: 'Popover 气泡提示', component: Popover, meta: 'notice' },
        { path: '/avatar', name: 'Avatar 头像', component: Avatar, meta: 'others' },
        { path: '/loading', name: 'Loading 加载动画', component: Loading, meta: 'others' },
      ],
    },
  ],
})

export default router
