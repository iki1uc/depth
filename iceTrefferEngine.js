// iceTrefferEngine.js

export const ICETrefferEngine = {

    hits: 0,
    misses: 0,

    check(real, target) {

        const diff =
            Math.abs(real.H - target.H) +
            Math.abs(real.B - target.B) +
            Math.abs(real.T - target.T);

        if (diff === 0) {
            this.hits++;
            return { event: "ICE", mode: "Feuer", diff };
        }

        this.misses++;
        return { event: "Abfall", mode: "Misstreffer", diff };
    }
};
