import ContextDemo from '../demos/ContextDemo'
import ImplementReduxDemo from '../demos/ImplementReduxDemo'
import HooksDemo from '../demos/HooksDemo'
import TempDemo from '../demos/TempDemo'

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
    },
    {
        path: '/temp',
        name: '临时 demo',
        component: TempDemo
    }
]
