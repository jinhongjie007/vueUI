import Vue from 'vue'
import Router from 'vue-router'

import qrcode from '@/views/wechat/qrcode/index'
import menu from '@/views/wechat/menu/index'
import material from '@/views/wechat/material/index'
import template from '@/views/wechat/template/index'
import reply from '@/views/wechat/reply/index'
import user from '@/views/wechat/user/index'
import message from '@/views/wechat/message/index'
import wechat from '@/views/wechat/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/wechat',
      component: wechat,
      children: [
        {
          path: 'qrcode',
          component: qrcode
        },
        {
          path: 'menu',
          component: menu
        },
        {
          path: 'material',
          component: material
        },
        {
          path: 'template',
          component: template
        },
        {
          path: 'reply',
          component: reply
        },
        {
          path: 'user',
          component: user
        },
        {
          path: 'message',
          component: message
        }
      ]
    }
  ]
})
