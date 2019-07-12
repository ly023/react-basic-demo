/**
 * @description 监听页面变化
 */
import React from 'react'
import {useState, useEffect} from 'react'

function getSize() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    }
}

function useWindowSize() {
    let [windowSize, setWindowSize] = useState(getSize())

    function handleResize() {
        setWindowSize(getSize())
    }

    // useEffect的第二个参数可用于定义其依赖的所有变量
    // 如果其中一个变量发生变化，则useEffect会再次运行
    // 第二个参数不传则每次render该函数组件都执行
    useEffect(() => {
        // here the effect

        window.addEventListener("resize", handleResize)

        // return一个函数，类似componentWillUnmount,会在下一次render前或销毁组件前运行
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return windowSize
}

function UseWindowSizeComp() {
    const windowSize = useWindowSize()
    return <>页面宽度：{windowSize.innerWidth}</>
}

export default UseWindowSizeComp
