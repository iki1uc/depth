export const boerse = {
    kgv: null,
    vola: null,
    marktkap: null,

    update(kgv, vola, marktkap) {
        this.kgv = kgv;
        this.vola = vola;
        this.marktkap = marktkap;
        return { kgv: this.kgv, vola: this.vola, marktkap: this.marktkap };
    }
};
