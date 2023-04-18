import Layout from '@/layout'

const assetsRouter = {
  path: '/assets',
  component: Layout,
  redirect: '/assets/classify/dashboard',
  name: 'Assets',
  meta: {
    title: '资产管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'classify',
      component: () => import('@/views/assets/classify/index'), // Parent router-view
      name: 'Classify',
      meta: { title: '资产分类' },
      redirect: '/assets/classify/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/assets/classify/dashboard'),
          name: 'Dashboard',
          meta: { title: '仪表盘' }
        },
        {
          path: 'modify',
          component: () => import('@/views/assets/classify/modify'),
          name: 'Modify',
          meta: { title: '资产' }
        }
      ]
    }
  ]
}

export default assetsRouter
