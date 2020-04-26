// import 'extends'

/**
 * 不想导入也想声明全局扩展的话也可以直接 declare global，
 */
import './g-extends';

/**
 * 可以直接引用 js ，包装成 npm 包模块即可
 * .d.ts 声明 test.js 类型
 * 没有必要，ts 环境，直接写 ts 就好
 * tsconfig.json allowJs 才会编译 js 模块。
 */
import { a as ajsm } from './js-module';

// declare global {
//     interface Window {
//         test: number;
//         load: string;
//     }
// }
const qnpmtest = {
    config: function (ac: string) {
        return 11;
    },
    getQtraceid: function () {
        return 22;
    },
    ac: function() {
        // 这里报错，没有声明局扩展
        console.log(window.load);
        console.log(ajsm);
        return ajsm;
    }
}
qnpmtest.ac();
export default qnpmtest;