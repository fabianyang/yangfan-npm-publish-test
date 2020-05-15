// 不添加 declare global 编译后, .d.ts 声明会被删除，相当于没有声明全局扩展
declare global {
    interface Window {
        hump(input: string): string;
    }
}
// 注意: 修改"全局声明"必须在模块内部, 所以至少要有 export{}字样
// 不然会报错❌: 全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中
export {}

// 第二种扩展模块方式
// declare namespace NodeJS {
//     interface Global {
//         abc: string;
//     }
// }

// global.abc = '123';