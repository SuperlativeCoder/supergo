<script>
  var iconList = require('../demo/icon.json');

  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
      icons: function() {
        let value = this.value
        return iconList.filter(function(item) {
          return item.toLowerCase().indexOf(value.toLowerCase()) != -1
        })
      }
    }
  }
</script>
<style scoped>
    .md_icon_input {
        width: 70%;
        height: 25px;
        padding: 3px;
        margin: auto;
        margin-top: 10px;
        border-radius: 6px;
        border: solid 1px #eeeeee;
        font-size: 14px;
        text-align: center;
    }
    .md_icon_show ul li {
      float: left;
      width: 16%;
      text-align: center;
      height: 110px;
      line-height: 60px;
      color: #666;
      font-size: 13px;
      border: 1px solid #eee;
      padding-top: 20px;
    }

    .md_icon_show span {
      display: block;
      line-height: normal;
      vertical-align: middle;
      color: #aaaaaa;
    }
</style>
## 图标

> 图标组件，来源：[ionicons](https://github.com/ionic-team/ionicons)

-----------

## 使用范例
> ```html
> <vs-Icon type="search" size="33px"></vs-Icon>
> ```

## 图标预览

<div style="text-align: center">
    <input type="text" class="md_icon_input" 
      v-model="value"
      placeholder="搜索"/>
</div>
<div class="md_icon_show" style="width: 80%;margin: auto;margin-top:20px;">
    <ul>
      <li v-for="(name, index) in icons" 
        :key="index">
        <vs-Icon :type="name" size="30px"></vs-Icon>
        <span>{{ name }}</span>
      </li>
    </ul>
</div>
