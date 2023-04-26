## 甘特图

甘特图组件是基于[gantt-task-react](https://github.com/MaTeMaTuK/gantt-task-react)开发的微搭自定义组件。仅支持 web 端使用。

## 使用指南

### 前置依赖

1.  确保拥有腾讯云账号、开通微搭低代码；
2.  确保本地安装  [Node.js](https://nodejs.org/en/)
3.  在微搭平台中[新建一个组件库](https://docs.cloudbase.net/lowcode/custom-components/quick-start/comps) ，组件库标识使用`weda_custom_components`

### 快速开始

下载代码并进入项目根目录，执行以下命令

####安装依赖

```bash
#npm
npm install
npm install -g @cloudbase/cli
```

```bash
#yarn
yarn
yarn global add @cloudbase/cli
```

### 开发工作流

#### 登录授权

```bash
tcb login
```

#### 调试

```bash
tcb lowcode debug
```

打开微搭编辑器调试本地组件

#### 检查

```bash
npm run lint
```

代码风格检查

#### 发布

```bash
tcb lowcode publish
```

如何在项目中使用，可参考[自定义组件实现](https://cloud.tencent.com/document/product/1301/72177)

- 1.创建组件库标识为 wedaCustom 的组件库。
- 2.上传组件代码到账号下,上传完毕后，可以在微搭平台发布组件库，即可在应用中使用
