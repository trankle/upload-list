<!--
 * @Description:  
 * @Author: 王天琦
 * @Date: 2023-09-18 09:59:29
-->
# crcc-uploadList

This template should help get you started developing with Vue 3 in Vite.init 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


### 发布 npm
```
发布前新增配置说明文件
进入 dist 目录，生成并配置 package.json 文件，操作如下：
命令行执行： npm init --yes 生成 package.json 文件，修改里面的项目信息即可
同时，在 dist 目录新建 README.md 文件并编辑内容，到时发布后在npm的说明展示
```
### 发布
```
进入 dist 目录，命令行执行登录：
npm login登录成功，可以执行发布命令：npm publish

如果是更新后重新发布，需要先执行
npm version patch， package.json 里的版本号变更，如1.0.0变成1.0.1
npm publish 发布推送
```