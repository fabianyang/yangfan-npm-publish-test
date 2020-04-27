/**
 * 将声明转为全局可见
 * 这种导入再导出的方式虽然可以解决问题，但毕竟还是添加了一层命名空间
 * 可以使用声明时随时导入，不必要声明全局空间。
 */
export as namespace ReactHelmet;
export * from 'react-helmet';