import Vue, { PluginObject, PluginFunction } from 'vue'
import Icon from '@/alpha-ui/packages/Icon'
import Sider from '@/alpha-ui/packages/Sider'
import Avatar from '@/alpha-ui/packages/Avatar'
import Popover from '@/alpha-ui/packages/Popover'
import { Layout, Content, Header, Footer, Top } from '@/alpha-ui/packages/Layout'
import { Col, Row } from '@/alpha-ui/packages/Grid'
import Card from '@/alpha-ui/packages/Card'
import Rate from '@/alpha-ui/packages/Rate'
import { dateFormate, valutaFormate } from '@/alpha-ui/filter/Filter'
import { Button, ButtonGroup } from '@/alpha-ui/packages/Button'
import Images from '@/alpha-ui/packages/Image'
import { Table, TableHeader, TableBody, TableRow, TableItem } from '@/alpha-ui/packages/Table'
import Alert from '@/alpha-ui/packages/Alert'
import Notify from '@/alpha-ui/packages/Notify'
import Message from '@/alpha-ui/packages/Message'
import { Breadcrumb, BreadcrumbItem } from '@/alpha-ui/packages/Breadcrumb'
import Tag from '@/alpha-ui/packages/Tag'
// 组件
const components: any[] = [
  Icon,
  Avatar,
  Top, Sider, Header, Layout, Content, Footer,
  Popover,
  Col, Row,
  Card,
  Rate,
  Button, ButtonGroup,
  Images,
  Table, TableHeader, TableBody, TableRow, TableItem,
  Alert, Notify,
  Breadcrumb, BreadcrumbItem,
  Tag,
]

// 过滤器
const filters: any[] = [
  dateFormate,
  valutaFormate,
]

class Alphaui implements PluginObject<any> {
  public install: PluginFunction<any> = (vue) => {
    components.map(component => {
      vue.component('vs-' + component.name, component)
    })

    filters.map(filter => {
      vue.filter('vs-' + filter.name, filter)
    })

    vue.prototype.$message = Message
    vue.prototype.$notify = Notify
  }
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  new Alphaui().install((window as any).Vue)
}

export default new Alphaui()
