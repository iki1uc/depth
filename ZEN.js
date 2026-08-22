export const ZEN = {

    in(input) {

        return {
            R: this.run(input),
            O: this.open(input),
            ein: this.haltung(input)
        }
    },

    run(input) {
        return 1          // Startimpuls
    },

    open(input) {
        return 1          // Öffnung / Würde
    },

    haltung(input) {
        return 1          // Innen-Haltung
    }
}
