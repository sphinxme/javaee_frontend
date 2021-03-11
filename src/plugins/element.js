import Vue from 'vue'
import {
  Button,
  Form, FormItem, Select, Input, Option, Radio, RadioButton, RadioGroup,
  Container, Main, Header, Aside, Footer,
  Row, Col,
  Message,
  Steps, Step,
  Tag,
  Popover,
  Tooltip,
  DatePicker,
  Upload,
  Calendar,
  Timeline, TimelineItem,
  Dialog,
  Progress,
  Menu, MenuItem, MenuItemGroup,
  Table, TableColumn,
  Loading,
  Card
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)

// 布局容器
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)

// 栅格系统
Vue.use(Row)
Vue.use(Col)

// 表单
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)

//
Vue.prototype.$message = Message

// 导航栏
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

// 表格
Vue.use(Table)
Vue.use(TableColumn)

// 步骤条
Vue.use(Steps)
Vue.use(Step)

//
Vue.use(Tag)

//
Vue.use(Popover)

//
Vue.use(Tooltip)

//
Vue.use(DatePicker)
Vue.use(Calendar)

Vue.use(Upload)

Vue.use(Timeline)
Vue.use(TimelineItem)
//
Vue.use(Progress)

//
Vue.use(Loading)
