import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import searchPage from '@/components/searchPage'
import BaseChart from '@/components/BaseChart'
import HeaderNavBar from '@/components/HeaderNavBar'
import ChartPageContent from '@/components/ChartPageContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        navbar: HeaderNavBar,
        content: searchPage
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        navbar: HeaderNavBar,
        content: searchPage
      }
    }, {
      path: '/chart',
      redirect: '/chart/gaon',
      components: {
        navbar: HeaderNavBar,
        content: ChartPageContent
      },
      children: [{
        path: ':chartName',
        components: {
          "main-content": BaseChart
        }
      }]
    }
  ]
})
