function DX_VectorMultiply(vec, mat) {
    // vereinfachte Darstellung
    return mat.map(row =>
        row[0]*vec.x + row[1]*vec.y + row[2]*vec.z + row[3]*vec.w
    );
}
