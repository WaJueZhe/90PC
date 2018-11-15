import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const BlockHome                 = resolve => require(['@/pages/home/blockHome'], resolve);
const BlockIndex                = resolve => require(['@/pages/home/blockIndex'], resolve);
const SeeMore                   = resolve => require(['@/pages/home/seeMore'], resolve);
const SbookSeeMore              = resolve => require(['@/pages/home/sbookSeeMore'], resolve);
const AccountDetail             = resolve => require(['@/pages/home/accountDetail'], resolve);
const TransDetail               = resolve => require(['@/pages/home/transDetail'], resolve);
const Login                     = resolve => require(['@/pages/home/login'], resolve);
const About                     = resolve => require(['@/pages/home/about'], resolve);
const PersonalHome              = resolve => require(['@/pages/home/personalHome'], resolve);
const SearchResult              = resolve => require(['@/pages/home/searchResult'], resolve);
const Personal                  = resolve => require(['@/pages/home/personal'], resolve);
const TradingRecord             = resolve => require(['@/pages/home/tradingRecord'], resolve);
const Ticket                    = resolve => require(['@/pages/home/ticket'], resolve);
const Shopping                  = resolve => require(['@/pages/home/shopping'], resolve);
const BlockDetail               = resolve => require(['@/pages/home/blockDetail'], resolve);
const RecordDetail              = resolve => require(['@/pages/home/recordDetail'], resolve);
const MyShare                   = resolve => require(['@/pages/home/myShare'], resolve);
const MyApplyFor                = resolve => require(['@/pages/home/myApplyFor'], resolve);
const ReceiveApply              = resolve => require(['@/pages/home/receiveApply'], resolve);
const BasicInformation          = resolve => require(['@/pages/home/basicInformation'], resolve);
const Sharing                   = resolve => require(['@/pages/home/sharing'], resolve);
const Integral                  = resolve => require(['@/pages/home/integral'], resolve);
const Product                   = resolve => require(['@/pages/home/product'], resolve);
const Financial                 = resolve => require(['@/pages/home/financial'], resolve);
const NodeDetail                = resolve => require(['@/pages/home/nodeDetail'], resolve);



const Home                   = resolve => require(['@/pages/home/home'], resolve);

export default new Router({
  routes: [
    {
      path: '/blockHome',
      name: 'BlockHome',
      component: BlockHome
    },
    {
      path: '/blockIndex',//链上公示
      name: 'BlockIndex',
      component: BlockIndex
    },
    {
      path: '/sharing',//共享经济
      name: 'Sharing',
      component: Sharing
    },
    {
      path: '/integral',//数字积分
      name: 'Integral',
      component: Integral
    },
    {
      path: '/product',//产品溯源
      name: 'Product',
      component: Product
    },
    {
      path: '/financial',//供应链金融
      name: 'Financial',
      component: Financial
    },
    {
      path: '/seeMore',
      name: 'SeeMore',
      component: SeeMore
    },
    {
      path: '/sbookSeeMore',
      name: 'SbookSeeMore',
      component: SbookSeeMore
    },
    {
      path: '/accountDetail',
      name: 'AccountDetail',
      component: AccountDetail
    },
    {
      path: '/transDetail',
      name: 'TransDetail',
      component: TransDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/personalHome',//个人用户首页
      name: 'PersonalHome',
      component: PersonalHome
    },
    {
      path: '/searchResult',//搜索结果
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/personal',//搜索结果
      name: 'Personal',
      component: Personal
    },
    {
      path: '/tradingRecord',//零购券
      name: 'TradingRecord',
      component: TradingRecord
    },
    {
      path: '/ticket',//久零券
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/shopping',//购物券
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/blockDetail',//区块详情
      name: 'BlockDetail',
      component: BlockDetail
    },
    {
      path: '/recordDetail',//记录详情
      name: 'RecordDetail',
      component: RecordDetail
    },
    {
      path: '/nodeDetail',//节点详情
      name: 'NodeDetail',
      component: NodeDetail
    },
    {
      path: '/myShare',//我的共享记录
      name: 'MyShare',
      component: MyShare
    },
    {
      path: '/myApplyFor',//我的申请
      name: 'MyApplyFor',
      component: MyApplyFor
    },
    {
      path: '/receiveApply',//收到的申请
      name: 'ReceiveApply',
      component: ReceiveApply
    },
    {
      path: '/basicInformation',//基本信息
      name: 'BasicInformation',
      component: BasicInformation
    },
    {
      path: '/',//搜索结果
      name: 'Home',
      component: Home
    },
  ]
})
