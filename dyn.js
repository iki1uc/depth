export const DYN = {

    in(zen) {

        return {
            ihr: this.fusion(zen),
            AR: this.ar(zen),
            ROW: this.row(zen),
            u: this.umgebung(zen),
            W: this.wave(zen)
        }
    },

    fusion(zen) {
        return 1
    },

    ar(zen) {
        return -1         // Rückwärts-Impuls
    },

    row(zen) {
        return 1          // Vorwärts-Ausbreitung
    },

    umgebung(zen) {
        return 1          // Außenraum
    },

    wave(zen) {
        return 1          // Bedeutung / Phase
    }
}
