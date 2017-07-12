<template>
    <div id="app">
        <v-layout>
            <v-sider collapsible :collapsed="collapsed" :trigger="false" :collapsed-width="64">
                <router-link class="logo" to="/">
                    <span class="logo-mini" v-show="collapsed"><strong>shop</strong></span>
                    <span class="logo-lg" v-show="!collapsed"><strong>X</strong>Shop</span>
                </router-link>
                <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <router-link :to="data.href" :class="{'nav-text':data.icon}">{{data.name}}</router-link>
                    </template>
                    <template scope="{data}" slot="sub">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header>
                    <v-icon class="trigger" :type="this.collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click.native="toggle">
                    </v-icon>
                </v-header>
                <v-content :style="{ padding: '0 15px' }">
                    <router-view></router-view>
                </v-content>
                <v-footer>
                    <v-col :md="12">Ant Design ©2016 Created by Ant UED</v-col>
                    <v-col :md="12" class="text-right">
                        <strong>Version</strong>
                        1.0.0
                    </v-col>
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      data: [
        {content: '1st item'},
        {content: '2nd item'},
        {content: '3rd item'}
      ],
      collapsed: false,
      menuData: [{
        name: '站点设置',
        icon: 'setting',
        children: [{
          name: '全局设置'
        }, {
          name: '登陆设置'
        }, {
          name: '消息模板'
        }, {
          name: '支付设置'
        }, {
          name: '物流配置'
        }, {
          name: '模板管理'
        }, {
          name: '图片管理'
        }, {
          name: '地区设置'
        }, {
          name: '权限设置'
        }]
      }, {
        name: '商品管理',
        icon: 'shop',
        children: [{
          name: '商品列表',
          href: '/goods/list'
        }, {
          name: '商品分类',
          href: '/goods/class'
        }, {
          name: '商品规格',
          href: '/goods/spec'
        }, {
          name: '商品属性',
          href: '/goods/'
        }, {
          name: '商品品牌',
          href: '/goods/brand'
        }]
      }, {
        name: '订单管理',
        icon: 'shopping-cart',
        children: [{
          name: '订单列表'
        }, {
          name: '发货单管理'
        }, {
          name: '快递单管理'
        }]
      }, {
        name: '促销管理',
        icon: 'gift',
        children: [{
          name: '订单促销'
        }, {
          name: '商品促销'
        }, {
          name: '限时促销'
        }, {
          name: '组合套餐'
        }]
      }, {
        name: '会员管理',
        icon: 'user',
        children: [{
          name: '会员列表',
          href: '/user/list'
        }, {
          name: '会员等级',
          href: '/user/grade'
        }, {
          name: '积分管理',
          href: '/user/points'
        }, {
          name: '余额管理',
          href: 'predeposit'
        }]
      }, {
        name: '运营管理',
        icon: 'compass',
        children: [{
          name: '文章分类',
          href: '/artical/class'
        }, {
          name: '文章管理',
          href: '/artical/list'
        }, {
          name: '站点帮助',
          href: '/help'
        }, {
          name: '友情链接',
          href: '/friend-link'
        }, {
          name: '广告管理',
          href: 'ad'
        }, {
          name: '首页管理',
          href: 'index'
        }, {
          name: '专题管理',
          href: 'special'
        }]
      }, {
        name: '统计管理',
        icon: 'area-chart',
        children: [{
          name: '店铺概况',
          href: '/stat/shop'
        }, {
          name: '会员分析',
          href: '/stat/user'
        }, {
          name: '行业分析',
          href: '/stat/industry'
        }, {
          name: '商品分析',
          href: '/stat/goods'
        }, {
          name: '销量分析',
          href: '/stat/trade'
        }, {
          name: '营销分析',
          href: '/stat/marketing'
        }, {
          name: '售后分析',
          href: '/stat/aftersale'
        }]
      }, {
        name: '微店管理',
        icon: 'mobile',
        children: [{
          name: '首页设置',
          href: '/wap/index'
        }, {
          name: '专题设置',
          href: '/wap/special'
        }]
      }, {
        name: '微信管理',
        icon: 'file',
        children: [{
          name: '二维码',
          href: '/wechat/qrcode'
        }, {
          name: '自定义菜单',
          href: '/wechat/menu'
        }, {
          name: '模板消息',
          href: '/wechat/template'
        }, {
          name: '素材管理',
          href: '/wechat/material'
        }, {
          name: '自动回复',
          href: '/wechat/user'
        }, {
          name: '用户管理',
          href: '/wechat/user'
        }, {
          name: '群发功能',
          href: '/wechat/message',
          target: '_blank'
        }]
      }]
    }
  },
  methods: {
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style>
#app {
    height: 100%;
}
#app .ant-layout {
    height: 100%;
}
#app .trigger {
    font-size: 18px;
    line-height: 50px;
    padding: 0 16px;
    cursor: pointer;
    transition: color .3s;
}
#app .logo {
    background: #367fa9;
    color: #fff;
    height: 50px;
    display: block;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    font-weight: 300;
}
#app .logo:hover {
    background: #357ca5;
}
#app .ant-layout-header {
    height: 50px;
    background: #3c8dbc;
    line-height: 50px;
    padding: 0;
    color: #fff;
}
#app .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
    margin-left: 8px;
}
#app .ant-layout-sider-collapsed .nav-text {
    display: none;
}
#app .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
        display: none;
}
#app .ant-layout-footer {
    background:#fff;
    padding:15px;
    color:#444;
    border-top:1px solid #d2d6de;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item-selected{
    background-color: #357ca5;
}
</style>
