// vectorBind.js

export const VectorBind = {

    // Bindungsfaktor abhängig von tmp-Axiomen
    bindFactor(axiom) {
        let f = 1.0;

        if (axiom.A) f += 0.2;   // Core stabilisiert
        if (axiom.B) f += 0.3;   // Bindung verstärkt
        if (axiom.C) f += 0.4;   // Compute reguliert
        if (axiom.D) f += 0.5;   // Drive begrenzt
        if (axiom.Q) f += 0.6;   // Queue puffert

        return f;
    },

    // Feuer-Vektor binden
    bind(fire, beam, axiom) {

        if (fire.mode !== "Feuer") {
            return {
                mode: "kein Feuer",
                vector: { x: 0, y: 0, z: 0 },
                axiom
            };
        }

        const factor = this.bindFactor(axiom);

        return {
            mode: "Feuer gebunden",
            vector: {
                x: beam.H * factor,
                y: beam.B * factor,
                z: beam.T * factor
            },
            axiom,
            level: fire.level / factor
        };
    }
};
