import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/equipment/index'),
    meta: { title: '设备管理', icon: 'shebei' }
  }]
}