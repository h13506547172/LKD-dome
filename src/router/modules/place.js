import Layout from '@/layout'
export default {
  path: '/place',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/place/index'),
    meta: { title: '点位管理', icon: 'dingwei' }
  }]
}