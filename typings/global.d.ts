/**
 * 当前模块使用全局声明
 * 无需 declare global, interface 会自动合并
 */
// 使用顶层 import 转化为模块，破坏全局声明
// import path from 'path';

interface Window {
    tests: number;
    load: string;
}

