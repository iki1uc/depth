export const CPU = {

    core: "NC",

    process(prim) {
        return prim.split("_")
    },

    unit(prim) {
        return prim.length
    },

    microcode(prim) {
        return prim + "_microcode"
    }
}
