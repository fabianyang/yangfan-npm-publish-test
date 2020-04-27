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

/**
 * 全局无法引用 HelmetTags 的声明
 * import 的话会破坏当前 .d.ts 的声明
 * 这种声明通常有业务意义
 * 放入到全局声明很可能发生：A 伙伴需要 htags 属性，B 伙伴不需要。引起全局命名空间的冲突。
 * 可以参考 fas fd 方式，创建类似 dto 目录，将独立的 interface 或 class 提取到单独 type 目录。
 * 使用时单独使用。
 */
interface TestHelmet {
    // htags: HelmetTags
    htags: typeof ReactHelmet.canUseDOM
}

/**
 * 支持 glob 通配符声明 Module
 */
declare module '*.png' {
    const src: string;
    export default src;
}