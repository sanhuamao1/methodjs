import tsup from 'tsup'

export default tsup.defineConfig({
    format: ['cjs', 'esm'], // 打包为cjs 、esm 格式
    entry: ['./src/index.ts'],
    dts: true, // 生成类型声明文件
    shims: true, // 为 Node.js 核心模块生成 polyfill，在浏览器环境中，也可以使用 require 和 module.exports
    skipNodeModulesBundle: true, // 跳过对 node_modules 中的依赖进行打包
    clean: true
})