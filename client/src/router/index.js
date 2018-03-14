import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import searchPage from '@/components/searchPage'
import BaseBillboard from '@/components/BaseBillboard'
import HeaderNavBar from '@/components/HeaderNavBar'
import BillboardPageContent from '@/components/BillboardPageContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        navbar: HeaderNavBar,
        content: BillboardPageContent
      },
      children: [{
        path: ':chartName',
        components: {
          "main-content": BaseBillboard
        }
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: searchPage
    }
  ]
})
