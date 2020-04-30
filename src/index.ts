// import 'extends'

/**
 * 不想导入也想声明全局扩展的话也可以直接 declare global，
 */
/**
 * 可以直接引用 js ，包装成 npm 包模块即可
 * .d.ts 声明 test.js 类型
 * 没有必要，ts 环境，直接写 ts 就好
 * tsconfig.json allowJs 才会编译 js 模块。
 */
import './extends';
import { a as ajsm } from './js-module';
const qnpmtest = {
    config: function (ac: string) {
        return 11;
    },
    getQtraceid: function () {
        return 22;
    },
    ac: function() {
        console.log(ajsm);
        return ajsm;
    }
}
qnpmtest.ac();
export default qnpmtest;