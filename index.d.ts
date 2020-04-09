interface Qtrace {
    config: (v?: string) => number;
    getQtraceid: () => number;
}
declare const qTrace: Qtrace;
export = qTrace;
