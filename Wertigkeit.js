// Wertigkeit.js
export const Wertigkeit = {
    scale: { ICE: 1, HOT: 2, HYBRID: 3, UNLOGIKAL: 5 },

    evaluate(mode) {
        return {
            mode,
            value: this.scale[mode] ?? 0,
            note: "Wertigkeit berechnet"
        };
    }
};
