interface Qtrace {
    config: (v?: string) => number;
    getQtraceid: () => number;
}

const qtrace = {
    config: function (ac: string) {
        return 11;
    },
    getQtraceid: function () {
        return 22;
    }
}
export default qtrace;