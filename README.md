# 物料模板

## 使用模板创建物料

```bash
$ tnpm i -g iceworks

$ mkdir my-materials && cd my-materials
# init material collection project
$ iceworks init material <templateNpmName>
# init sindle component project
$ iceworks init component <templateNpmName>
```

## 模板列表

### template-react

- 特点：React/Fusion/icejs
- npm 包名：`@icedesign/ice-react-material-template`
- 使用场景：通用
- 代码地址：[code](/packages/template-react)

### template-react-ts

- 特点：React/Fusion/icejs/TypeScript
- npm 包名：`@icedesign/ice-react-ts-material-template`
- 使用场景：通用
- 代码地址：[code](/packages/template-react-ts)

### template-vue

- 特点：Vue/ElementUI/Vue CLI
- npm 包名：`@icedesign/ice-vue-material-template`
- 使用场景：通用
- 代码地址：[code](/packages/template-vue)

### template-rax

- 特点：Rax/build-scripts
- npm 包名：`@icedesign/template-rax`
- 使用场景：无线多端场景
- 代码地址：[code](/packages/template-rax)

## 模板开发

```bash
# 支持相对路径
$ iceworks init material ../../react-template
```
