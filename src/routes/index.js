import React from 'react'
import Loadable from 'react-loadable'

const Loading = <div>...loading</div>

export default [
    {
        path: '/context-demo',
        name: 'context demo',
        component: Loadable({
            loader: () => import('../demos/ContextDemo'),
            loading: () => Loading
        }),
    },
    {
        path: '/implement-redux-demo',
        name: '实现redux',
        component: Loadable({
            loader: () => import('../demos/ImplementReduxDemo'),
            loading: () => Loading
        })
    },
    {
        path: '/hooks-demo',
        name: 'hooks demo',
        component: Loadable({
            loader: () => import('../demos/HooksDemo'),
            loading: () => Loading
        })
    },
    {
        path: '/forward-demo',
        name: 'forward demo',
        component: Loadable({
            loader: () => import('../demos/ForwardDemo'),
            loading: () => Loading
        })
    },
    {
        path: '/set-state-demo',
        name: 'setstate-demo',
        component: Loadable({
            loader: () => import('../demos/SetStateDemo'),
            loading: () => Loading
        })
    },
    {
        path: '/synthetic-event-demo',
        name: 'synthetic-event-demo',
        component: Loadable({
            loader: () => import('../demos/SyntheticEventDemo'),
            loading: () => Loading
        })
    }
    // {
    //     path: '/temp',
    //     name: '临时 demo',
    //     component: TempDemo
    // }
]
