// feuer.js

export const Feuer3D = {

    // Feuer-Level steigt mit Raum-Ausdehnung
    level(H, B, T) {
        return (H * 0.7) + (B * 0.9) + (T * 1.3);
    },

    // Feuer entsteht nur bei ICE-Treffer
    ignite(event, beam, axiom) {

        if (event !== "ICE") {
            return {
                mode: "kein Feuer",
                level: 0,
                axiom,
                beam
            };
        }

        const L = this.level(beam.H, beam.B, beam.T);

        return {
            mode: "Feuer",
            level: L,
            axiom,
            beam
        };
    }
};
