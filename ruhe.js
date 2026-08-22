export function Axiom3x3(gpu, cpu, ram) {
    return {
        matrix: [
            [gpu, cpu, ram],
            ["tmpA", "tmpB", "tmpC"],
            ["tmpD", "tmpQ", "tmpX"]
        ]
    };
}
