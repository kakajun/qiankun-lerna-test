### lerna组织微服务
一个最接近真实工程组织的方式

lerna作用介绍:   https://www.lernajs.cn/

### 工程介绍
```
├── packages
│ ├── vue                         <!-- 微服务1 -->
│ │ └── src
│ │ │ ├── router
│ │ │ │ └── index.js
│ │ │ ├── store
│ │ │ │ └── index.js
│ │ │ ├── views
│ │ │ │ ├── About.vue            <!-- 这里演示微服务1的公共组件导出 -->
│ │ │ │ ├── About1.vue            <!-- 随便一个路由 -->
│ │ │ │ └── Home.vue            <!-- 1子服务主体 -->
│ │ │ ├── App.vue
│ │ │ ├── common.js            // 这里演示微服务1的公共组件导出
│ │ │ ├── main.js
│ │ │ └── public-path.js
│ ├── vue2-main                  <!-- 基座 -->
│ │ └── src
│ │ │ ├── views
│ │ │ │ ├── About.vue
│ │ │ │ ├── About1.vue
│ │ │ │ └── Home.vue            <!-- 基座主页 -->
│ │ │ ├── App.vue
│ │ │ ├── main.js
│ │ │ ├── micro-app.js
│ │ │ └── public-path.js
│ └── xwtest2                     <!-- 微服务2 -->
│ │ └── src
│ │ │ ├── views
│ │ │ │ ├── About.vue            <!-- 这里演示微服务2的公共组件导出 -->
│ │ │ │ ├── About1.vue
│ │ │ │ └── Home.vue
│ │ │ ├── App.vue
│ │ │ ├── common.js            // 这里演示微服务2的公共组件导出
│ │ │ ├── main.js
│ │ │ └── public-path.js
└── scripts
```

### 主要技术栈
1. 采用乾坤构建微服务
2. 采用lerna管理多包之间互相依赖问题

### 测试后收获
1. 测试了lerna自动发版并更改对应依赖版本, 省去修改版本麻烦漏掉问题
2. packge的组织多包方式, 可以很快清除所有依赖并,并快速进行安装, 速度快的不只一点
3. lerna自动软链接所有包, 可以省去npm link  的麻烦, 愉快的自由测试或打debug

### 思考(答案都在demo里面)
1. 包名与引用不同名, lerna link 能成功么?
2. 只发布其中一个包?
### lerna重要命令:

lerna  clean                   清理掉所有依赖

lerna publish                  发布所有包版本并自动更新对应版本

lerna publish from-package     修改完指定版本后, publish后, 发布对应更改版本(不会更新所有依赖版本)
