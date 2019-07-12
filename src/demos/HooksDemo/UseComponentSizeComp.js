/**
 * @description 监听组件size变化
 */
import React from 'react'
import {useState, useLayoutEffect, useRef} from 'react'

function getSize(el) {
    if (!el) {
        return {}
    }

    return {
        width: el.offsetWidth,
        height: el.offsetHeight
    }
}


function useComponentSize(ref) {
    let [componentSize, setComponentSize] = useState(getSize(ref.current))

    function handleResize() {
        if (ref && ref.current) {
            setComponentSize(getSize(ref.current))
        }
    }

    // 与useEffect类似，但它会在所有DOM更新完后执行
    useLayoutEffect(() => {
        handleResize()

        let resizeObserver = new ResizeObserver(() => handleResize())
        resizeObserver.observe(ref.current)

        return () => {
            resizeObserver.disconnect(ref.current)
            resizeObserver = null
        }
    }, [])

    return componentSize
}

function UseComponentSizeComp() {
    const ref = useRef(null)
    const componentSize = useComponentSize(ref)

    return <>
        {componentSize.width}
        <textarea ref={ref}/>
    </>
}

export default UseComponentSizeComp
