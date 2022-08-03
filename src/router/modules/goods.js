import Layout from '@/layout'
export default {
  path: '/goods',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/goods/index'),
    meta: { title: '商品管理', icon: 'pingtu' }
  }]
}