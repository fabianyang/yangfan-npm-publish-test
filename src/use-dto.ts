import { TestHelmet } from './dto/test-helment';

/**
 * 可以继承
 */
interface CurrentTestHelmet extends TestHelmet {
    current: number;
}

/**
 * 这种类可以看成是独立的 class ，也可以提取到 dto 目录
 */
class UseTestHelmet implements CurrentTestHelmet {
    htags = true
    current = 1;
}

export default UseTestHelmet;