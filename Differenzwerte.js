export const Differenzwerte = {
    diff(a, b) {
        return {
            wert: Math.abs(a - b),
            kritisch: Math.abs(a - b) > 5,   // Beispielschwelle
            note: "Differenzwert berechnet"
        };
    }
};
