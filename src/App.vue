<template>
    <div id="app">
        <v-layout>
            <v-sider collapsible :collapsed="collapsed" :trigger="false" :collapsed-width="64">
                <div class="logo">XSHOP</div>
                <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span :class="{'nav-text':data.icon}">{{data.name}}</span>
                    </template>
                    <template scope="{data}" slot="sub">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header :style="{ background: '#fff', padding: 0 }">
                    <v-icon class="trigger" :type="this.collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click.native="toggle"></v-icon>
                </v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
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
      collapsed: false,
      menuData: [{
        name: '站点设置',
        icon: 'user'
      }, {
        name: '商品管理',
        icon: 'team',
        children: [{
          name: '商品列表'
        }, {
          name: '商品分类'
        }, {
          name: '商品规格'
        }, {
          name: '商品属性'
        }, {
          name: '商品品牌'
        }]
      }, {
        name: '订单管理',
        icon: 'file',
        children: [{
          name: '订单列表'
        }, {
          name: '发货单管理'
        }, {
          name: '快递单管理'
        }]
      }, {
        name: '促销管理',
        icon: 'file'
      }, {
        name: '会员管理',
        icon: 'file',
        children: [{
          name: '会员列表'
        }, {
          name: '会员等级'
        }, {
          name: '积分管理'
        }, {
          name: '预存款管理'
        }]
      }, {
        name: '运营管理',
        icon: 'file',
        children: [{
          name: '文章分类'
        }, {
          name: '文章管理'
        }, {
          name: '站点帮助'
        }, {
          name: '友情链接'
        }, {
          name: '广告管理'
        }, {
          name: '首页管理'
        }]
      }, {
        name: '统计管理',
        icon: 'file',
        children: [{
          name: '店铺概况'
        }, {
          name: '商品分析'
        }, {
          name: '销量分析'
        }, {
          name: '营销分析'
        }, {
          name: '售后分析'
        }]
      }, {
        name: '微店管理',
        icon: 'file',
        children: [{
          name: '首页设置'
        }, {
          name: '专题设置'
        }]
      }, {
        name: '微信管理',
        icon: 'file',
        children: [{
          name: '二维码'
        }, {
          name: '自定义菜单'
        }, {
          name: '模板消息'
        }, {
          name: '素材管理'
        }, {
          name: '自动回复'
        }, {
          name: '用户管理'
        }, {
          name: '群发功能'
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
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color .3s;
}
#app .trigger:hover {
    color: #108ee9;
}
#app .logo {
    height: 32px;
    background: #333;
    border-radius: 6px;
    margin: 16px;
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
</style>
