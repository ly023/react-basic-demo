import ContextDemo from '../demos/ContextDemo'
import ImplementReduxDemo from '../demos/ImplementReduxDemo'
import HooksDemo from '../demos/HooksDemo'

export default [
    {
        path: '/context-demo',
        name: 'context demo',
        component: ContextDemo,
    },
    {
        path: '/implement-redux-demo',
        name: '实现redux',
        component: ImplementReduxDemo
    },
    {
        path: '/hooks-demo',
        name: 'hooks demo',
        component: HooksDemo
    }
]
