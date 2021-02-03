### 1、获取props中某个属性的两种方式
1. ```
    setup(props) {
        let {title} = toRefs(props)
    }
    ```
2. 如果 title 是可选的 prop，则传入的 props 中可能没有 title 。在这种情况下，toRefs 将不会为 title 创建一个 ref 。你需要使用 toRef 替代它
    ```
    setup(props) {
        let title = toRef(props, 'title')
    }
    ```



### 2、teleport标签的作用
允许组件挂载到vue App以外的节点
#### 应用场景
+ 场景描述:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modal弹窗, 一般是基于屏幕做fix定位, 但是如果父元素的 transform , perspective 或 filter 属性不为 none 时， fixed 元素就会相对于父元素来进行定位。
+ 使用方法:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将modal组件用teleport标签包裹起来, 再增加 `to="body"` 属性, 就可以轻松解决上述问题
