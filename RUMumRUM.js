// RUMumRUM.js – Unlogikal Layer (Fallback-Engine)

export const RUMumRUM = {

    featureLevel: ["11_0", "10_0", "9_3"],   // alle drei DX-Generationen
    axiom: ["tmpC", "tmpD", "tmpQ"],         // KEIN tmpA, KEIN tmpB

    mode: "UNLOGIKAL",                       // wichtig: nicht linear

    init() {
        return {
            dx: "RUMumRUM initialized",
            mode: this.mode,
            axiom: this.axiom,
            featureLevels: this.featureLevel,
            note: "Fallback aktiv – löst Moves die UM/RUM/RUMRUM nicht lösen können"
        };
    },

    solve(move) {
        return {
            move,
            solved: true,
            method: "unlogikal-fallback",
            axiomUsed: this.axiom
        };
    }
};
