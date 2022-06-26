*** 复习 ***
选项
    DOM
        el：脚本方式，设定vue对象管理的元素
        render：脚手架方式，加载.vue文件到vue对象里
    数据
        data：存储在这里的数据可以到页面上用
        props：组件声明“形参/属性”，接受外来的实参
        computed：计算属性，这里的函数使用时不用()
        methods：存储函数，可以到处使用
        watch：监听器，监听任意属性的变化
    资源
        directives：自定义指令，用`v-`开头
        filters：过滤器，可以转换`{{}}`中的值
            格式：{{值|过滤器}}
        components：注册组件
            默认语法：`components：{组件名}`组件名就是标签名
            自定义语法：`components：{标签名：组件名}`
    生命周期钩子
        钩子函数：在固定事件发生时，自动触发的函数就叫钩子函数
        创建阶段：内存中，还没显示到页面上
            创建前：beforeCreate
            创建完：created
        挂载阶段：显示到页面上
            挂载前：beforeMount
            挂载完：mounted
        更新阶段：页面发生更新
            更新前：beforeUpdate
            更新完:updated
        销毁阶段：组件被移除
            移除前：beforeDestroy
            移除后：destroyed
指令
    v-text：innerText
    v-html: innerHTML
    v-show: CSS方式隐藏 display:none
    v-if: 根据条件移除/添加DOM元素，适合网络请求场景
        v-else
        v-else-if
    v-for：遍历
        key: 唯一标识，提高`数组内容变化时`，页面重绘时的重用效率
        三种语法：
            v-for="值 in/of 数组"
            v-for="(值，序号) in/of 数组"
            v-for="值 in/of 数字"
    v-on：事件
        vue2语法 `@事件名=""`
    v-bind：属性
        vue2语法 `:属性名=""`
    v-model：双向数据绑定
        搭配表单元素：输入框、单选、多选、下拉，这些用户可操作的组件
        作用：实时把组件的值更新到绑定的变量上
    v-slot：插槽
        组件负责布局操作，使用插槽作为占位符使用
        组件在使用时，其双标签写法中的内容，会替换掉插槽
        命名插槽：`<slot name='名字'>`
            使用时有3中语法
            slot='名字'
            v-slot：名字
            #名字 
    v-pre：原样显示{{}}
    v-once：一次性展示，后续不更新
特殊属性：
    ref：快速绑定变量和元素，代替了DOM的查询操作
        使用时从`$refs`中读取
axios
    网络请求模块，需要手动安装`npm i axios vue-axios`
    使用方式有两种
        单独引入：在.vue文件里，用import引入axios，直接用
        全局引入：当采用组件开发时，多个.vue文件，要想使用axios，单独引入费劲
            main.js中引入即可
                简单粗暴的原型注入：`Vue.prototype.axios=axios`
                    缺点：使用时没有代码提示，`this.axios`
                优雅：采用vue-axios模块辅助引入
                    `Vue.use(VueAxios,axios)`
                    优点：有代码提示 this.axios
*** 路由系统 ***
什么是路由系统：通过浏览器地址栏路径的变化，切换页面上显示的组件
    实现页面内容切换的效果
    竞争力奇数：`SPA` - Single Page Application 单页应用
        传统的网站：通过多个HTML文件实现多页开发
        VUE：单页应用，只有一个index.html文件
            通过`局部`内容的切换，来实现页面的变化：效率更高，体验更好，服务器压力小
*** 总结 ***
1. 路由系统：
    - router-view 占位符：路由系统提供的
        - 作用：会扫描浏览器的地址栏路径，找到其对应的组件，进行展示
    - 组件：如果是路由切换的组件，则必须存储在 `views` 目录里
        - 命名大驼峰，不要求必须2个单词，没有命名风险
    - 路由配置文件：router/index.js
        - 配置`path`路径 和 组件的对应关系
        - props属性：为true，代表允许组件通过 props 属性接收参数
        - 路径：
            *: 通配符，匹配所有没有的路径
            /：根路径  首页
            /???：自定义的其他路径
        - 传参的两种方式：
            传统：`路径?参数=值&参数=值`
            新的：`路径/值/值/值` 需要配合路由的配置 `path:'/路径/:参数/:参数`
        - router-view -> 查找浏览器地址栏 -> 到index.js中匹配 -> 找到组件
*** Vuex ***
全局状态共享：把数据在多个.vue文件中共享
    实现方案：把 store 对象，存储到vue的实例对象里，-- main.js
    使用时
        把共享的数据存储在 store.state 属性里
        利用 $store.state 来读取属性
        为了安全性考虑：要修改属性必须通过指定的方法
            在`mutations`属性里，制作函数
            触发时，需要用`commit`来触发