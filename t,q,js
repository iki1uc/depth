export const Teilung = {

    unter: 0,
    ueber: 0,
    tief: 0,

    yx: 0,   // y.x
    xy: 0,   // x.y

    qt: 0,   // q.t
    tq: 0,   // t.q

    update(type) {

        if (type === "unter") this.unter += 1;
        if (type === "ueber") this.ueber += 1;
        if (type === "tief") this.tief += 1;

        if (type === "y.x") this.yx += 1;
        if (type === "x.y") this.xy += 1;

        if (type === "q.t") this.qt += 1;
        if (type === "t.q") this.tq += 1;

        return {
            unterteilung: this.unter,
            ueberteilung: this.ueber,
            tiefenteilung: this.tief,

            quer: this.yx,
            laengs: this.xy,

            queueTeilung: this.qt,
            timeQueueTeilung: this.tq
        };
    }
};
