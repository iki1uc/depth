// tmpAxiomEngine.js

export const TmpAxiomEngine = {

    // Axiome sind nur temporäre Marker
    axiomSet(tmpA, tmpB, tmpC) {
        return { A: tmpA, B: tmpB, C: tmpC };
    },

    // Fusion zweier Axiom-Sets
    fuse(set1, set2) {
        return {
            A: set1.A || set2.A,
            B: set1.B || set2.B,
            C: set1.C || set2.C,
            D: set1.D || set2.D,
            Q: set1.Q || set2.Q
        };
    },

    // CDQ-Treffpunkt (3eck)
    cdqTreffpunkt(Aset, Bset) {
        return {
            C: Bset.C,   // Compute von B
            D: Aset.D,   // Drive von A
            Q: true      // Queue aktiv
        };
    }
};
