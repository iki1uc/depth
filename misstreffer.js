// misstreffer.js

export const Misstreffer = {

    count: 0,

    check(real, target) {
        const miss =
            Math.abs(real.H - target.H) +
            Math.abs(real.B - target.B) +
            Math.abs(real.T - target.T);

        if (miss > 0) {
            this.count++;
        }

        return miss;
    }
};
