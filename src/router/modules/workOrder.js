import Layout from '@/layout'
export default {
  path: '/workorder',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/workOrder/index'),
    meta: { title: '工单管理', icon: 'dingdan2' }
  }]
}