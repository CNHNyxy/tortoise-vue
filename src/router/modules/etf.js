import Layout from '@/layout'

const etfRouter = {
  path: '/etf',
  component: Layout,
  redirect: '/etf/dashboard',
  name: 'Assets',
  meta: {
    title: 'ETF',
    icon: 'nested'
  },
  children: [
    {
        path: 'dashboard',
        component: () => import('@/views/etf/dashboard'),
        name: 'Dashboard',
        meta: { title: '仪表盘' }
      },
      {
        path: 'modify',
        component: () => import('@/views/etf/modify'),
        name: 'Modify',
        meta: { title: '资产' }
      }
  ]
}

export default etfRouter
