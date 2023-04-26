import Layout from '@/layout'

const mindRouter = {
    path: '/mind',
    component: Layout,
    children: [{
      path: 'index',
      component: ()=>import('@/views/mind/index'),
      name: 'mind',
      meta: { title: '思维导图', icon: 'icon' }
    }]
}

export default mindRouter
