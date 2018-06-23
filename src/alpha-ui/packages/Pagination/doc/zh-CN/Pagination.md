<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

## 分页

> 当数据量过多时，使用分页分解数据
----------

## 使用范例
> 基础用法
:::demo
```html
<vs-Pagination
    layout="prev, pager, next"
    :page-size="10"
    :total="50"></vs-Pagination>
<vs-Pagination
    layout="prev, pager, next"
    :page-size="10"
    :total="1000"></vs-Pagination>
<vs-Pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</vs-Pagination>
```
:::

> 带有背景色
:::demo
```html
<vs-Pagination
  background
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</vs-Pagination>
```
:::

> 小型分页
:::demo
```html
<vs-Pagination
  small
  background
  :page-size="10"
  layout="prev, pager, next"
  :total="50">
</vs-Pagination>
```
:::

> 附加功能
:::demo
```html
<vs-Pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage1"
  :page-size="100"
  layout="total, prev, pager, next"
  :total="1000"></vs-Pagination>

<vs-Pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage2"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="sizes, prev, pager, next"
  :total="1000"></vs-Pagination>

<vs-Pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage3"
  :page-size="100"
  layout="prev, pager, next, jumper"
  :total="1000"></vs-Pagination>

<vs-Pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage4"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400"></vs-Pagination>
```
:::