function GL_Vertex(v) {
    return {
        format: "RGBA",
        data: [v.x, v.y, v.z, v.w]
    };
}
