/**
 * 使用声明时候随时引用。
 * 可以看成该模块独立只表示声明。
 * 独立的 class 可以看成只有属性初始化但没有业务逻辑的 class
 * npm 发布时仍可以被 npm 调用者引用
 */
import { canUseDOM } from 'react-helmet'
export interface TestHelmet {
    // htags: HelmetTags
    htags: typeof canUseDOM
}
