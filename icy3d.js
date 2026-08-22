// icy3d.js

export const ICY3D = {

    // 3D-Impulse-Beam: Höhe, Breite, Tiefe
    beam(H, B, T) {
        return { H, B, T };
    },

    // tmp-Axiom-3eck: frei austauschbar
    axiom(tmpA, tmpB, tmpC) {
        return { A: tmpA, B: tmpB, C: tmpC };
    },

    // Axiom-Fusion: erzeugt CDQ-Treffpunkt
    fuse(Aset, Bset) {
        return {
            C: Bset.C,   // Compute von B
            D: Aset.D,   // Drive von A
            Q: true      // Queue aktiv
        };
    },

    // Impulse-Beam durch ICY schicken
    impulse(beam, axiom) {
        return {
            height: beam.H * (axiom.A ? 1.1 : 1),
            width:  beam.B * (axiom.B ? 1.2 : 1),
            depth:  beam.T * (axiom.C ? 1.3 : 1),
            axiom
        };
    }
};
